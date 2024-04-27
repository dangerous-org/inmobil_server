import User from "../models/user.model.js";

export const getUserRepository = async (email, password) => {
  return await User.find({ email, password });
};

export const createUserRepository = async (userData) => {
  return await User.create(userData);
};

export const findByUserNameRepository = async (userName) => {
  return await User.find({ userName });
};

export const findByEmailRepository = async (email) => {
  return await User.find({ email });
};
