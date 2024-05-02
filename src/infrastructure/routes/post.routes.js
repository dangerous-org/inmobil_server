import { Router } from 'express';
import {CreatePost, getPost, getPostByUser} from "../../application/controllers/post.controller.js"
import userNameValidator from '../middlewares/username.validator.js';
const postRouter = Router();

postRouter.post("/create",CreatePost);
postRouter.get("/find",getPost);
postRouter.get("/findbyuser",userNameValidator,getPostByUser);

export default postRouter;