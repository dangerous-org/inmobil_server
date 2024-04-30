import { Router } from 'express';
import {CreatePost, getPost} from "../../application/controllers/post.controller.js"
const postRouter = Router();

postRouter.post("/create",CreatePost);
postRouter.get("/find",getPost);

export default postRouter;