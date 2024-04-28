import { request, response } from "express";
import jwt from "jsonwebtoken";

const authValidator = (req = request, res = response, next) => {
  const { authToken } = req.cookies;
  if (!authToken) return res.status(401).json({ message: "unauthorized" });

  jwt.verify(authToken, process.env.SECRET_TOKEN, (error, user) => {
    if (error)
      return res.status(403).json({ message: "unauthorized  => validate" });
  });
  next();
};

export default authValidator;
