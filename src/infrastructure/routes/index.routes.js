import { Router } from "express";
import userRoutes from "./user.routes.js";
import postRouter from "./post.routes.js";

const Routes = Router();

Routes.use("/api/users", userRoutes);
Routes.use("/api/posts", postRouter);

export default Routes;
