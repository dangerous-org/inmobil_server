import { hashSync, compareSync } from "bcrypt";

export const hashPassword = (password) => {
  const hashedPassword = hashSync(password, 10);
  return hashedPassword;
};

export const comparePassword = (password, hashedPassword) => {
  const match = compareSync(password, hashedPassword);
  return match;
};
