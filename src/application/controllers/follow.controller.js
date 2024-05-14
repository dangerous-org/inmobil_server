import {
  followUserService,
  getFollowersService,
  unfollowUserService,
} from "../services/follow.service.js";

export const GetFollowers = async (req, res) => {
  try {
    const {userId} = req.query;
    const followers = await getFollowersService(userId);
    return res.status(200).json(followers);
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
}

export const FollowUser = async (req, res) => {
  try {
    const { userId, followedId } = req.query;
    const followData = await followUserService(userId, followedId);
    return res.status(201).json(followData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const UnfollowUser = async (req, res) => {
  try {
    const { userId, followedId } = req.query;
    const unfollowData = await unfollowUserService(userId, followedId);
    return res.status(200).json(unfollowData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
