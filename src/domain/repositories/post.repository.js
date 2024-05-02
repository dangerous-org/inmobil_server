import Post from "../models/post.model.js";

export const getPostRepository = async ( termino, param) => {
    const regex = RegExp(termino,'i');
    let query = {};
    if(!param){
        return await Post.find({$or : [
                                    {title:regex},
                                    {description : regex}, 
                                    {location : regex},
                                    {typeOffer : regex}
                                ]}).populate('user');
    }
    query[param] = regex;
    return await Post.find(query);
}


export const getPostByUser = async ( userName ) => {
    return await Post.find({userName});
}

export const createPostRepository = async ( postData ) => {
    return await Post.create(postData);
}

