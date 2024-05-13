import { followUserService } from "../services/follow.service.js";

export const FollowUser = async (req, res) => {
  try {
    const { userId, followedId } = req.query;
    const followData = await followUserService(userId, followedId);
    return res.status(201).json(followData);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
