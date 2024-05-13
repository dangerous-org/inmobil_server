import { updateFile, uploadFiles } from "../../utils/uploads.js";
import {
  createPostRepository,
  getPostByUserRepository,
  getPostByParamRepository,
  getPostByIdRepository,
  updatePostRepository,
  getPostsRepository,
} from "../../domain/repositories/post.repository.js";

import { findByUserNameRepository } from "../../domain/repositories/user.repository.js";

export const getPostByParamService = async (termino, param) => {
  const Posts = await getPostByParamRepository(termino, param);
  return Posts;
};

export const getPostByIdService = async (id) => {
  const Post = await getPostByIdRepository(id);
  return Post;
};

export const getPostsByUserService = async (userName) => {
  const [User] = await findByUserNameRepository(userName);
  if (!User) {
    throw new Error("User does not exists");
  }
  const Posts = await getPostByUserRepository(User);
  return Posts;
};

export const createPostService = async (postData, postPhotos) => {
  if (!postPhotos) {
    throw new Error("you must upload at least a photo");
  }
  let { photos } = postPhotos;
  photos = await uploadFiles(photos);
  postData.photos = photos;
  const Post = await createPostRepository(postData);
  return Post;
};

export const updatePostService = async (
  postData,
  postId,
  { photos: postPhotos }
) => {
  if (!postPhotos) {
    throw new Error("you must upload at least a photo");
  }
  const { photos: oldPhotos } = await getPostByIdRepository(postId);
  const newPhotos = await updateFile(oldPhotos, postPhotos);
  postData.photos = newPhotos;
  const UpdatePost = await updatePostRepository(postData, postId); 
  return UpdatePost;
};

export const getPostsService = async () => {
  const Posts = await getPostsRepository();
  return Posts;
};
