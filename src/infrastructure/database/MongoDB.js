import { connect } from "mongoose";

const uri =
  process.env.MONGO_URI;

const MongoDB = async () => {
  try {
    await connect(uri);
    console.log('db connected');
  } catch (error) {
    console.log("Mongo db error", error);
  }
};

export default MongoDB;
