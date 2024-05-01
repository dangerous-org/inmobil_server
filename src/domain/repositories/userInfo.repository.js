import UserInfo from "../models/userInfo.model.js";

export const createUserInfoRepository = async (info) => {
  return await UserInfo.create(info);
};

export const updateUserInfoRepository = async (userId, info) => {
  return await UserInfo.findOneAndUpdate({ user: userId }, info);
};

export const getUserInfoRepository = async (userId) => {
  return await UserInfo.findOne({ user: userId });
};
