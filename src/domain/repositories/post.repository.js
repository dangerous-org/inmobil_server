import Post from "../models/post.model.js";
import mongoose from 'mongoose'

export const getPostsRepository = async () => {
  return await Post.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "userData",
      },
    },
    {
      $unwind: "$userData",
    },
    {
      $lookup: {
        from: "userprofiles",
        localField: "userData._id",
        foreignField: "user",
        as: "userProfileData",
      },
    },
    {
      $unwind: "$userProfileData",
    },
  ]);
};

export const getPostByParamRepository = async (termino, param) => {
  const regex = RegExp(termino, "i");
  let query = {};
  if (!param) {
    return await Post.find({
      $or: [
        { title: regex },
        { description: regex },
        { location: regex },
        { typeOffer: regex },
      ],
    }).populate("user");
  }
  query[param] = regex;
  return await Post.find(query);
};

export const getPostByIdRepository = async (id) => {
  return await Post.aggregate([
    {
      $match: {
        _id: new mongoose.Types.ObjectId(id)
      }
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "userData",
      },
    },
    {
      $unwind: "$userData",
    },
    {
      $lookup: {
        from: "userprofiles",
        localField: "userData._id",
        foreignField: "user",
        as: "userProfileData",
      },
    },
    {
      $unwind: "$userProfileData",
    },
  ]);
};

export const getPostByUserRepository = async ({ _id }) => {
  return await Post.find({ user: _id }).populate("user");
};

export const createPostRepository = async (postData) => {
  return await Post.create(postData);
};

export const updatePostRepository = async (postData, postId) => {
  return await Post.findByIdAndUpdate(postId, postData);
};
