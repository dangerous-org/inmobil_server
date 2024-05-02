import { uploadFiles } from '../../utils/uploads.js';
import {createPostRepository,
        getPostRepository,
        getPostByUser}
        from '../../domain/repositories/post.repository.js';

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
    const Post = await getPostRepository(termino, param);
    return Post;
}