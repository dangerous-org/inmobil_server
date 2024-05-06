import {
  createUserProfileRepository,
  updateUserProfileRepository,
  getUserProfileRepository,
} from "../../domain/repositories/userProfileRepository.js";
import { findByUserNameRepository } from "../../domain/repositories/user.repository.js";

export const createUserProfileService = async (info) => {
  const UserProfile = await createUserProfileRepository(info);
  return UserProfile;
};

export const updateUserProfileService = async (userId, info) => {
  const UserProfile = await updateUserProfileRepository(userId, info);
  return UserProfile;
};

export const getUserProfileService =  async (userName) => {
  const [User] = await findByUserNameRepository(userName);
  if (!User) throw new Error(`User ${userName} does not exists`);
  const UserProfile = await getUserProfileRepository(User._id);
  return UserProfile;
};
