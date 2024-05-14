import Follow from "../models/follow.model.js";

export const getFollowersRepository = async (userId) => {
  //por terminar
  return await Follow.find({ UserId: userId }).populate("followedId");
};

export const followUserRepository = async (followData) => {
  return await Follow.create(followData);
};

export const unfollowUserRepository = async (userId, followedId) => {
  return await Follow.findOneAndDelete({ followedId, userId });
};
