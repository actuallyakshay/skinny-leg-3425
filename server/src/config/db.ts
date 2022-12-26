import mongoose from "mongoose";

export const connect = async () => {
  return await mongoose.connect(String(process.env.MONGO_URL));
};
