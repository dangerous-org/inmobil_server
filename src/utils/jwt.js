import jwt from "jsonwebtoken";

export const generateJwt = (payload) => {
  const token = jwt.sign(
    {
      data: payload,
    },
    "XDDD",
    { expiresIn: "1h" }
  );
  return token;
};

export const verifyToken = (token) => {
  const user = jwt.verify(token, "XDDD", (error, user) => {
    if (error) throw new Error(error);
    return user.data;
  });
  return user;
};