import jwt from "jsonwebtoken";

export const generateJwt = (payload) => {
  const token = jwt.sign(
    {
      data: payload,
    },
    process.env.SECRET_TOKEN,
    { expiresIn: "1h" }
  );
  return token;
};

export const verifyToken = (token) => {
  const user = jwt.verify(token, process.env.SECRET_TOKEN, (error, user) => {
    if (error) throw new Error(error);
    return user.data;
  });
  return user;
};