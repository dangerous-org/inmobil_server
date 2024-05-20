const phoneValidator = (req, res, next) => {
  const regEx = /^\+\d{1,3}\d{10}$/;
  const { phoneNumber } = req.body;

  if (!regEx.test(phoneNumber))
    return res
      .status(400)
      .json({ message: "Phone number must start with the country code" });
  next();
};

export default phoneValidator;
