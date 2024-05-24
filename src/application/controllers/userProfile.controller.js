import { request, response } from "express";
import {
  createUserProfileService,
  updateUserProfileService,
  getUserProfileService,
} from "../services/userProfile.service.js";

export const CreateUserProfile = async (req = request, res = response) => {
  try {
    const info = req.body;
    const UserProfile = await createUserProfileService(info);
    return res.status(201).json(UserProfile);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const UpdateUserProfile = async (req = request, res = response) => {
  try {
    const { userId } = req.params;
    const info = req.body;
    const UserProfile = await updateUserProfileService(userId, info, req.files);
    return res.status(200).json(UserProfile);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const GetUserProfile = async (req = request, res = response) => {
  try {
    const { userName } = req.params;
    const UserProfile = await getUserProfileService(userName);
    return res.status(200).json(UserProfile);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
