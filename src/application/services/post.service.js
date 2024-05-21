import { updateFile, uploadFiles } from "../../utils/uploads.js";
import {
  createPostRepository,
  getPostByUserRepository,
  getPostByParamRepository,
  getPostByIdRepository,
  updatePostRepository,
  getPostsRepository,
  updatePostStatusRepository,
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
  await updatePostRepository(postData, postId);
  const UpdatePost = await getPostByIdRepository(postId);
  return UpdatePost;
};

export const getPostsService = async () => {
  const Posts = await getPostsRepository();
  return Posts;
};

export const markPostAsSoldOrRentedService = async (postId, status) => {
  if (!["sold", "rented"].includes(status)) {
    throw new Error("Invalid status. Status must be either 'sold' or 'rented'.");
  }

  const Post = await getPostByIdRepository(postId);
  if (!Post) {
    throw new Error("Post does not exist");
  }

  Post.status = status;
  await updatePostStatusRepository(postId, Post);

  const updatedPost = await getPostByIdRepository(postId);
  return updatedPost;
};
