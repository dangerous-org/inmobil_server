const birthDateValidator = (req, res, next) => {
  const { birthDate } = req.body;
  const date = new Date(birthDate).getFullYear();
  const currentYear = new Date().getFullYear();
  const age = currentYear - date;
  if (date > currentYear)
    return res.status(400).json({ message: "enter a valid date" });

  if (age < 18) return res.status(401).json({ message: "you must be of legal age" });
  next();
};

export default birthDateValidator;
