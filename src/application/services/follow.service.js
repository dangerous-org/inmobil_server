import { followUserRepository, getFollowersRepository, unfollowUserRepository } from "../../domain/repositories/follow.repository.js";
import User from "../../domain/models/user.model.js";

export const getFollowersService = async (userId) => {

  return await getFollowersRepository(userId);
}

export const followUserService = async (userId, followedId) => {
  await User.findByIdAndUpdate(
    userId,
    { $addToSet: { following: followedId } },
    { new: true }
  );

  await User.findByIdAndUpdate(
    followedId,
    { $addToSet: { followers: userId } },
    { new: true }
  );

  const followData = { userId, followedId };
  return await followUserRepository(followData);
};

export const unfollowUserService = async (userId, followedId) => {
  await User.findByIdAndUpdate(
    userId,
    { $pull: { following: followedId } },
    { new: true }
  );
  await User.findByIdAndUpdate(
    followedId,
    { $pull: { followers: userId } },
    { new: true }
  );

  return await unfollowUserRepository(userId,followedId);
};
