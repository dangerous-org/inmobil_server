import { followUserRepository } from "../../domain/repositories/follow.repository.js";

export const followUserService = async (user, followedUser) => {
  const followData = { user, followedUser };
  return followUserRepository(followData);
};
