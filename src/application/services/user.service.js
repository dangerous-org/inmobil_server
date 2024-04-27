import { compareSync } from "bcrypt";
import {
  createUserRepository,
  findByEmailRepository,
  findByUserNameRepository,
  getUserRepository,
} from "../../domain/repositories/user.repository.js";
import { hashPassword, comparePassword } from "../../utils/hashPassword.js";
import { generateJwt, verifyToken } from "../../utils/jwt.js";

export const createUserService = async (userData, req, res) => {
  const { password } = userData;

  const userFoundByEmail = await findByEmailRepository(userData.email);
  const userFoundByUserName = await findByUserNameRepository(userData.userName);

  if (userFoundByEmail.length > 0)
    throw new Error(`An user already exists with email ${userData.email}`);

  if (userFoundByUserName.length > 0)
    throw new Error(`An user already exists with user ${userData.userName}`);

  const hashedPassword = hashPassword(password);

  const User = await createUserRepository({
    userName: userData.userName,
    email: userData.email,
    password: hashedPassword,
  });

  const { userName, email, _id, createdAt, updatedAt } = User;
  const token = generateJwt({
    User: { userName, email, _id, createdAt, updatedAt },
  });

  res.cookie("authToken", token);
  return { userName, email, _id, createdAt, updatedAt };
};

export const loginUserService = async (userEmail, userPassword, res) => {
  const [userFound] = await findByEmailRepository(userEmail);

  if (userFound == null || undefined) throw new Error("User doesn't exists");

  const { password } = userFound;
  const isMatch = compareSync(userPassword, password);

  if (!isMatch) throw new Error("Incorrect password");

  const { _id, userName, email, createdAt, updatedAt } = userFound;
  const token = generateJwt({ _id, userName, email, createdAt, updatedAt });

  res.cookie("authToken", token);
  return { _id, userName, email, createdAt, updatedAt };
};

export const authenticateUserService = (token) => {
  if (!token) throw new Error("token not found");
  const User = verifyToken(token);
  return User;
};
