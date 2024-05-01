import mongoose from "mongoose";

const UserInfo = new mongoose.Schema({
  dni: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  names: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

export default mongoose.model("UsersInfo", UserInfo);
