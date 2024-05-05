const postValidator = (req, res, next) => {
  const payload = req.body;
  if (payload.title.length < 6)
    return res
      .status(400)
      .json({ message: "Title must have at least 6 characters" });

  if (payload.price.length < 1)
    return res.status(400).json({ message: "Enter a valid price" });

  if (payload.description.length < 10)
    return res
      .status(400)
      .json({ message: "Description must have at least 20 characters" });

  if (payload.location.length < 1)
    return res.status(400).json({ message: "Enter a valid location" });

  const builtDate = new Date(payload.builtDate);
  const currentDate = new Date();

  if (payload.builtDate == "Invalid date")
    return res.status(400).json({ message: "Enter a valid built date" });

  if (builtDate > currentDate)
    return res
      .status(400)
      .json({ message: "Built date cannot be greater than current date" });

  if (payload.typeOffer.length < 1)
    return res.status(400).json({ message: "Enter a valid type offer" });

  if (payload.status.length < 1)
    return res.status(400).json({ message: "Enter a valid status" });

  if (payload.typeEstate.length < 1)
    return res.status(400).json({ message: "Enter a valid type estate" });
  next();
};

export default postValidator;
