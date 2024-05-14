import { Router } from "express";
import { FollowUser, GetFollowers, UnfollowUser } from "../../application/controllers/follow.controller.js";
const followRouter = Router();

followRouter.post("/follow", FollowUser);
followRouter.post("/unfollow", UnfollowUser);
followRouter.get("/followers", GetFollowers);
export default followRouter;
