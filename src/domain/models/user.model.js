import mongoose from "mongoose";

const UserModel = new mongoose.Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserModel);

export default User;
