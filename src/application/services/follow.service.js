import { followUserRepository } from "../../domain/repositories/follow.repository.js";
import User from "../../domain/models/user.model.js";

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
  return followUserRepository(followData);
};
