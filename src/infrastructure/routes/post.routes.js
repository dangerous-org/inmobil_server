import { Router } from 'express';
import {CreatePost} from "../../application/controllers/post.controller.js"
const postRouter = Router();

postRouter.post("/create",CreatePost);

export default postRouter;