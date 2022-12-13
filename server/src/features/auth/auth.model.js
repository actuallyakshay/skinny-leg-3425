const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    pincode: { type: String },
    password: { type: String },
    role: { type: String, enum: ["Admin", "Guest"] },
    address: [],
    phoneNumber: { type: String, unique: true },
    age: { type: String },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    user_image: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = User = mongoose.model("user", userSchema);
