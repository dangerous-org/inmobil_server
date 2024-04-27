import { connect } from "mongoose";

const uri =
  "mongodb+srv://inmobilinc:JpdFKfYc2jnMVA22@inmobil.hzxxzeq.mongodb.net/Inmobil?retryWrites=true&w=majority&appName=Inmobil";

const MongoDB = async () => {
  try {
    await connect(uri);
    console.log('db connected');
  } catch (error) {
    console.log("Mongo db error", error);
  }
};

export default MongoDB;
