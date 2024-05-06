import mongoose from "mongoose";

const UserProfile = new mongoose.Schema({
  dni: {
    type: String,
    default: "",
  },
  phoneNumber: {
    type: String,
    default: "",
  },
  names: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  birthDate: {
    type: Date,
    default: "",
  },
  picture: {
    type: String,
    default:
      "https://icon-library.com/images/default-profile-icon/default-profile-icon-16.jpg",
  },
  biography: {
    type: String,
    default: "",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model("UserProfiles", UserProfile);
