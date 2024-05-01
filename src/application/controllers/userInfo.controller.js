import { request, response } from "express";
import {
  createUserInfoService,
  updateUserInfoService,
  getUserInfoService,
} from "../services/userInfo.service.js";

export const CreateUserInfo = async (req = request, res = response) => {
  try {
    const info = req.body;
    const UserInfo = await createUserInfoService(info);
    return res.status(201).json(UserInfo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const UpdateUserInfo = async (req = request, res = response) => {
  try {
    const { userId } = req.params;
    const info = req.body;
    const UserInfo = await updateUserInfoService(userId, info);
    return res.status(201).json(UserInfo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const GetUserInfo = async (req = request, res = response) => {
  try {
    const { userId } = req.params;
    const UserInfo = await getUserInfoService(userId);
    return res.status(200).json(UserInfo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
