const mongoose = require("mongoose");
const productSchema = new mongoose.Schema(
  {
    image: String,
    name: String,
    price1: Number, // dis_price
    price2: Number, // ac_price
    off: Number,   
    quantity: Number,
    category: String,
    tablet: String,
    ingredients: String,
    company: String,
    testInclude: String,
    rating: [{ user_name: String, user_image: String, stars: Number }],
    reviews: [
      {
        user_name: String,
        user_image:String,
        title: String,
        liked: [{ user_name: String, user_image: String }],
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = Product = mongoose.model("product", productSchema);
