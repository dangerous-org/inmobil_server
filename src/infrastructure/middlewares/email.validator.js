import { request, response } from "express";

const emailValidator = (req = request, res = response, next) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const { email } = req.body;
  if (!emailRegex.test(email))
    return res.status(400).json({ message: "enter a valid email" });

  next();
};

export default emailValidator;
