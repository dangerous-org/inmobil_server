import { Router } from "express";
import userRoutes from "./user.routes.js";
import postRouter from "./post.routes.js";
import userProfileRoutes from "./userProfile.routes.js";
import followRouter from "./follow.routes.js";
const Routes = Router();
Routes.use("/api/users", userRoutes);
Routes.use("/api/posts", postRouter);
Routes.use("/api/userProfile", userProfileRoutes);
Routes.use("/api/follows",followRouter);
export default Routes;
