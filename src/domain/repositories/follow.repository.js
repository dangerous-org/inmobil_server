import Follow from "../models/follow.model.js";

export const followUserRepository = async (followData) => {
  return await Follow.create(followData);
};
