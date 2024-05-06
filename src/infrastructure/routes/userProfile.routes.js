import { Router } from "express";
import {
  CreateUserProfile,
  UpdateUserProfile,
  GetUserProfile,
} from "../../application/controllers/userProfile.controller.js";
import birthDateValidator from "../middlewares/birthDate.validator.js";
import namesValidator from "../middlewares/names.validator.js";
import dniValidator from "../middlewares/dni.validator.js";
import phoneValidator from "../middlewares/phone.validator.js";
const userInfoRoutes = Router();

userInfoRoutes.post(
  "/create",
  namesValidator,
  dniValidator,
  phoneValidator,
  CreateUserProfile
);

userInfoRoutes.put(
  "/update/:userId",
  namesValidator,
  dniValidator,
  phoneValidator,
  birthDateValidator,
  UpdateUserProfile
);

userInfoRoutes.get("/getUserInfo/:userName", GetUserProfile);

export default userInfoRoutes;
