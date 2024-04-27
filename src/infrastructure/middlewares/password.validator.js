const passwordValidator = (req, res, next) => {
  const { password } = req.body;
  if (password.legth === 0)
    return res.status(401).json({ message: "enter valid password" });

  if (password.length < 6)
    return res
      .status(401)
      .json({ message: "password must have at least 6 characters" });

  next();
};

export default passwordValidator;
