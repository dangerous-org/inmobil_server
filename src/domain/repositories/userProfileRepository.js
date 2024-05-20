import UserProfile from "../models/userProfile.model.js";

export const createUserProfileRepository = async (info) => {
  return await UserProfile.create(info);
};

export const updateUserProfileRepository = async (userId, info) => {
  return await UserProfile.findOneAndUpdate({ user: userId }, info).populate('user');
};

export const getUserProfileRepository = async (userId) => {
  return await UserProfile.findOne({ user: userId }).populate('user');
};
