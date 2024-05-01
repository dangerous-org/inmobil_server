import { Router } from "express";
import userRoutes from "./user.routes.js";
import userInfoRoutes from "./userInfo.routes.js";

const Routes = Router();

Routes.use("/api/users", userRoutes);
Routes.use("/api/usersInfo", userInfoRoutes);
export default Routes;
