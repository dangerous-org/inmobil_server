const namesValidator = (req, res, next) => {
  const regEx = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s'-]+$/;
  const { names, lastName } = req.body;
  if (!regEx.test(names))
    return res.status(400).json({ message: "enter a valid names" });

  if (!regEx.test(lastName))
    return res.status(400).json({ message: "enter a valid last name" });

  next();
};

export default namesValidator;