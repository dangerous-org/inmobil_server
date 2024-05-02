import { Router } from "express";
import {
  CreateUser,
  LoginUser,
  AuthenticateUser,
  GoogleOauth,
} from "../../application/controllers/user.controller.js";
import emailValidator from "../middlewares/email.validator.js";
import userNameValidator from "../middlewares/username.validator.js";
import passwordValidator from "../middlewares/password.validator.js";

const userRoutes = Router();

userRoutes.post(
  "/create",
  userNameValidator,
  emailValidator,
  passwordValidator,
  CreateUser
);

userRoutes.post("/login", emailValidator, passwordValidator, LoginUser);

userRoutes.post("/authenticateUser", AuthenticateUser);

userRoutes.post("/googleOauth", GoogleOauth);

export default userRoutes;
