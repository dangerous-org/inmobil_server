import { uploadFiles } from '../../utils/uploads.js';
import {createPostRepository,
        getPostByUserRepository,
        getPostRepository}
        from '../../domain/repositories/post.repository.js';

import {findByUserNameRepository} from '../../domain/repositories/user.repository.js'

export const createPostService = async (postData,postPhotos) => {
    if(!postPhotos){
        throw new Error('Debe subir al menos una foto')
    }
    let {photos} = postPhotos;
    photos = await uploadFiles(photos);
    postData.photos = photos;
    const Post = await createPostRepository (postData);
    return Post;
} 

export const getPostService = async (termino, param) => {
    const Posts = await getPostRepository(termino, param);
    return Posts;
}

export const getPostsByUserService = async (userName) => {
    const [User] = await findByUserNameRepository(userName);
    if(!User){
        throw new Error('Este usuario es inexistente');
    }
    const Posts = await getPostByUserRepository(User);
    return Posts;
}

export const updatePostService = async (postData, postId) => {
    
}