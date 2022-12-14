const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = Cart = mongoose.model("cart", CartSchema);
