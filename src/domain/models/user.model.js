import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: true,
  },
}, {timestamps: true});

const User = mongoose.model("Users", UserModel);

export default User;
