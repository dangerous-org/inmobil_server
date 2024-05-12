import { Router } from "express";
import { FollowUser } from "../../application/controllers/follow.controller.js";
const followRouter = Router();

followRouter.post("/create", FollowUser);

export default followRouter;
