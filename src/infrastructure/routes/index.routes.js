import { Router } from "express";
import userRoutes from "./user.routes.js";

const Routes = Router();

Routes.use("/api/users", userRoutes);

export default Routes;
