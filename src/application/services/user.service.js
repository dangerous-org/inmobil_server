import { compareSync } from "bcrypt";
import {
  createUserRepository,
  findByEmailRepository,
  findByUserNameRepository,
} from "../../domain/repositories/user.repository.js";
import {
  createUserProfileRepository,
  getUserProfileRepository,
} from "../../domain/repositories/userProfileRepository.js";
import { hashPassword, comparePassword } from "../../utils/hashPassword.js";
import { generateJwt, verifyToken } from "../../utils/jwt.js";
import googleOauthVerify from "../../utils/googleOauthVerify.js";

export const createUserService = async (userData, res) => {
  const { password } = userData;

  const userFoundByEmail = await findByEmailRepository(userData.email);
  const userFoundByUserName = await findByUserNameRepository(userData.userName);

  if (userFoundByUserName.length > 0)
    throw new Error(
      `An user already exists with user name ${userData.userName}`
    );

  if (userFoundByEmail.length > 0)
    throw new Error(`An user already exists with email ${userData.email}`);

  const hashedPassword = hashPassword(password);

  const User = await createUserRepository({
    userName: userData.userName,
    email: userData.email,
    password: hashedPassword,
  });

  const UserProfile = await createUserProfileRepository({ user: User._id });
  const { picture } = UserProfile;

  const { userName, email, _id, createdAt, updatedAt } = User;
  const token = generateJwt({
    userName,
    email,
    _id,
    createdAt,
    updatedAt,
    picture,
  });

  res.cookie("authToken", token);
  return { userName, email, _id, createdAt, updatedAt, picture };
};

export const loginUserService = async (userEmail, userPassword, res) => {
  const [userFound] = await findByEmailRepository(userEmail);

  if (!userFound) throw new Error("User doesn't exists");

  const { password } = userFound;
  const isMatch = compareSync(userPassword, password);

  if (!isMatch) throw new Error("Incorrect password");

  const { _id, userName, email, createdAt, updatedAt } = userFound;
  const { picture } = await getUserProfileRepository(_id);
  const token = generateJwt({
    _id,
    userName,
    email,
    createdAt,
    updatedAt,
    picture,
  });

  res.cookie("authToken", token);
  return { _id, userName, email, createdAt, updatedAt, picture };
};

export const googleOauthService = async (token, res) => {
  if (!token) throw new Error("token not found");

  const payload = await googleOauthVerify(token);
  const userFound = await findByEmailRepository(payload.email);

  let userData;
  if (userFound.length > 0) {
    userData = userFound[0];
  } else {
    userData = await createUserRepository({
      userName: "user" + payload.sub,
      password: "",
      email: payload.email,
    });
    const UserProfile = await createUserProfileRepository({
      names: payload.given_name,
      lastName: payload.family_name,
      picture: payload.picture,
      user: userData._id,
    });
  }

  const { _id, userName, email, createdAt, updatedAt } = userData;
  const { picture } = await getUserProfileRepository(_id);
  const authToken = generateJwt({
    _id,
    userName,
    email,
    createdAt,
    updatedAt,
    picture,
  });

  res.cookie("authToken", authToken);
  return { _id, userName, email, createdAt, updatedAt, picture };
};

export const authenticateUserService = (token) => {
  if (!token) throw new Error("token not found");
  const User = verifyToken(token);
  return User;
};
