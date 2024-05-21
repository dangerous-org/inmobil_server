import {
  createPostService,
  getPostByParamService,
  getPostsByUserService,
  updatePostService,
  getPostsService,
  getPostByIdService,
} from "../services/post.service.js";


export const GetPostByParam = async (req, res) => {
  try {
    const { termino, param } = req.query;
    const Post = await getPostByParamService(termino, param);
    return res.status(200).json(Post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const GetPostById = async (req, res) => {
  try {
    const { id } = req.query;
    const Post = await getPostByIdService(id);
    return res.status(200).json(Post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const GetPostByUser = async (req, res) => {
  try {
    const { userName } = req.query;
    const Posts = await getPostsByUserService(userName);
    return res.status(200).json(Posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const CreatePost = async (req, res) => {
  try {
    const postData = req.body;
    const postPhotos = req.files;
    const Post = await createPostService(postData, postPhotos);
    return res.status(201).json({ message: "post created", Post });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const UpdatePost = async (req, res) => {
  try {
    const { id: postId } = req.query;
    const { ...postData } = req.body;
    const postPhotos = req.files;
    const Post = await updatePostService(postData, postId, postPhotos);
    return res.status(200).json(Post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const GetPosts = async (req, res) => {
  try {
    const Posts = await getPostsService();
    return res.status(200).json(Posts);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const MarkPostAsSoldOrRented = async (req, res) => {
  try {
    const { id: postId, status } = req.body;
    const updatedPost = await markPostAsSoldOrRentedService(postId, status);
    return res.status(200).json(updatedPost);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
