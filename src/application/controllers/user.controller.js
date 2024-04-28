import {
  createUserService,
  loginUserService,
  authenticateUserService,
  googleOauthService,
} from "../services/user.service.js";
import { request, response } from "express";

export const CreateUser = async (req = request, res = response) => {
  try {
    const userData = req.body;
    const User = await createUserService(userData,res);
    return res.status(201).json({ message: "user created", User });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const LoginUser = async (req = request, res = response) => {
  try {
    const { email, password } = req.body;
    const User = await loginUserService(email, password, res);
    return res.status(200).json(User);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const GoogleOauth = async (req = request, res = response) => {
  try {
    const {token} = req.body;
    const User = await googleOauthService(token, res);
    return res.status(201).json({ message: "user created", User });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const AuthenticateUser = (req = request, res = response) => {
  try {
    const { authToken } = req.cookies;
    const User = authenticateUserService(authToken);
    return res.status(200).json(User);
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
