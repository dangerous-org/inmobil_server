import { request, response } from "express";
const userNameValidator = (req = request, res = response, next) => {
  const characters = /^[a-zA-Z0-9_]+$/;

  const { userName } = req.body;

  if (userName.length < 4)
    return res
      .status(400)
      .json({ message: "username must have at least 4 characters" });

  if (userName.length > 15)
    return res
      .status(400)
      .json({ message: "username must have at most 15 characters" });

  if (!characters.test(userName))
    return res.status(400).json({ message: "enter a valid username" });

  next();
};

export default userNameValidator;
