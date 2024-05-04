import { updateFile, uploadFiles } from '../../utils/uploads.js';
import {createPostRepository,
        getPostByUserRepository,
        getPostRepository,
        getPostByIdRepository,
        updatePostRepository}
        from '../../domain/repositories/post.repository.js';

import {findByUserNameRepository} from '../../domain/repositories/user.repository.js'

export const getPostService = async (termino, param) => {
    const Posts = await getPostRepository(termino, param);
    return Posts;
}

export const getPostByIdService = async (id) => {
    const Post = await getPostByIdRepository(id);
    return Post;
}

export const getPostsByUserService = async (userName) => {
    const [User] = await findByUserNameRepository(userName);
    if(!User){
        throw new Error('Este usuario es inexistente');
    }
    const Posts = await getPostByUserRepository(User);
    return Posts;
}

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

export const updatePostService = async (postData, postId, {photos : postPhotos}) => {
    if(!postPhotos){
        throw new Error('Debe subir al menos una foto');
    }
    const {photos : oldPhotos } = await getPostByIdRepository(postId);
    const newPhotos = await updateFile(oldPhotos, postPhotos);
    postData.photos = newPhotos;
    await updatePostRepository(postData,postId);
    const UpdatePost = await getPostByIdRepository(postId);
    return UpdatePost;
}