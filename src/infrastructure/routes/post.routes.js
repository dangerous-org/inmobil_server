import { Router } from "express";
import {
  CreatePost,
  GetPostByParam,
  GetPostById,
  GetPostByUser,
  UpdatePost,
  GetPosts,
  MarkPostAsSoldOrRented
} from "../../application/controllers/post.controller.js";
import userNameValidator from "../middlewares/username.validator.js";
import isValidId from "../middlewares/mongoId.validator.js";
import postValidator from "../middlewares/post.validator.js";

const postRouter = Router();

postRouter.get("/getAll", GetPosts);

postRouter.post("/create", postValidator, CreatePost);

postRouter.get("/find", GetPostByParam);

postRouter.get("/findbyid", isValidId, GetPostById);

postRouter.get("/findbyuser", userNameValidator, GetPostByUser);

postRouter.put("/update", UpdatePost);

postRouter.post("/markPostAsSoldOrRented", MarkPostAsSoldOrRented);

export default postRouter;



