const dniValidator = (req, res, next) => {
  const regEx = /^\d{7,10}$/;
  const { dni } = req.body;

  if (!regEx.test(dni))
    return res
      .status(400)
      .json({ message: "The ID number must contain between 7 and 10 digits." });
  next();
};

export default dniValidator;
