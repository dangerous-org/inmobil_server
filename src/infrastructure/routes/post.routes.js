import { Router } from 'express';

import {CreatePost, 
        getPost, 
        getPostById, 
        getPostByUser, 
        updatePost} from "../../application/controllers/post.controller.js"


import userNameValidator from '../middlewares/username.validator.js';
import isValidId from '../middlewares/mongoId.validator.js'
const postRouter = Router();

postRouter.post("/create",CreatePost);
postRouter.get("/find",getPost);
postRouter.get("/findbyid",isValidId,getPostById);
postRouter.get("/findbyuser",userNameValidator,getPostByUser);
postRouter.put("/update",isValidId,updatePost);

export default postRouter;