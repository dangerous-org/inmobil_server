import Post from "../models/post.model.js";

export const getPostRepository = async ( termino ) => {
    const regex = RegExp(termino,'i');
    return await Post.find({$or : [
                                {title:regex},
                                {description : regex}, 
                                {location : regex},
                                {typeOffer : regex}
                            ]}).populate('user');;
}


export const getPostByUser = async ( userName ) => {
    return await Post.find({userName});
}

export const createPostRepository = async ( postData ) => {
    return await Post.create(postData);
}