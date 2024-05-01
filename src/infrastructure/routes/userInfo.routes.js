import { Router } from "express";
import {
  CreateUserInfo,
  UpdateUserInfo,
  GetUserInfo,
} from "../../application/controllers/userInfo.controller.js";
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
  CreateUserInfo
);

userInfoRoutes.put(
  "/update/:userId",
  namesValidator,
  dniValidator,
  phoneValidator,
  birthDateValidator,
  UpdateUserInfo
);

userInfoRoutes.get("/getUserInfo/:userId", GetUserInfo);

export default userInfoRoutes;
