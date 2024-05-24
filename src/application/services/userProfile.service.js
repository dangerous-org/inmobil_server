import {
  createUserProfileRepository,
  updateUserProfileRepository,
  getUserProfileRepository,
} from "../../domain/repositories/userProfileRepository.js";
import { updateFile } from "../../utils/uploads.js";
import { findByUserNameRepository } from "../../domain/repositories/user.repository.js";
import { getPostByUserRepository } from "../../domain/repositories/post.repository.js";

export const createUserProfileService = async (info) => {
  const UserProfile = await createUserProfileRepository(info);
  return UserProfile;
};

export const updateUserProfileService = async (userId, info, files) => {
  const { names, lastName, dni, phoneNumber, location, biography, birthDate } =
    info;

  let picture = null;

  if (files != null || files != undefined) {
    picture = files.picture;
  }

  if (!picture) {
    await updateUserProfileRepository(userId, {
      names,
      lastName,
      dni,
      phoneNumber,
      location,
      biography,
      birthDate,
    });
    return getUserProfileRepository(userId);
  }

  const oldUserProfile = await getUserProfileRepository(userId);

  const newPicture = await updateFile(
    oldUserProfile.picture,
    picture.tempFilePath
  );

  const UserProfile = await updateUserProfileRepository(userId, {
    names,
    lastName,
    dni,
    phoneNumber,
    location,
    biography,
    birthDate,
    picture: newPicture,
  });

  return getUserProfileRepository(userId);
};

export const getUserProfileService = async (userName) => {
  const [User] = await findByUserNameRepository(userName);

  if (!User) throw new Error(`User ${userName} does not exists`);

  const UserProfile = await getUserProfileRepository(User._id);
  const Posts = await getPostByUserRepository(User._id);

  return { UserProfile, Posts };
};
