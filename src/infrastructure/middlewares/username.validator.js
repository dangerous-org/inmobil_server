import { request, response } from "express";
const userNameValidator = (req = request, res = response, next) => {
  let { userName } = req.body;
  if(!userName){
    userName = req.query;
  }
  if (userName.length === 0)
    return res.status(401).json({ message: "enter a valid username" });
  const characters = /^[a-zA-Z0-9_]+$/;
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
