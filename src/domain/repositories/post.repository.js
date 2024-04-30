import Post from "../models/post.model.js";

export const getPostByTitleRepository = async ( title ) => {
    return await Post.find({title});
}
export const getPostByUser = async ( userName ) => {
    return await Post.find({userName});
}

export const createPostRepository = async ( postData ) => {
    return await Post.create(postData);
}