import {
  createUserInfoRepository,
  updateUserInfoRepository,
  getUserInfoRepository,
} from "../../domain/repositories/userInfo.repository.js";

export const createUserInfoService = async (info) => {
  const UserInfo = await createUserInfoRepository(info);
  return UserInfo;
};

export const updateUserInfoService = async (userId, info) => {
  const UserInfo = await updateUserInfoRepository(userId, info);
  return UserInfo;
};

export const getUserInfoService = async (userId) => {
  const Userinfo = await getUserInfoRepository(userId);
  return Userinfo;
};
