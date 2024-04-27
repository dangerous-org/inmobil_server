import { request, response } from "express";
const userNameValidator = (req = request, res = response, next) => {
  const { userName } = req.body;

  if (userName.length === 0)
    return res.status(401).json({ message: "enter a valid username" });

  if (userName.length < 4)
    return res
      .status(401)
      .json({ message: "username must have at least 4 characters" });

  if (userName.length > 12)
    return res
      .status(401)
      .json({ message: "username must have at most 12 characters" });
  next();
};

export default userNameValidator;
