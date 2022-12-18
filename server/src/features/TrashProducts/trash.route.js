const express = require("express");
const Product = require("../product/product.model");
const Trash = require("./trash.model");

const app = express.Router();

app.get("", async (req, res) => {
  try {
    let trashs = await Trash.find();
    res.send(trashs);
  } catch (e) {
    res.send(e.message);
  }
});

app.post("", async (req, res) => {
  try {
    let product = await Product.create(req.body);
    await Trash.findByIdAndDelete(req.body._id);
    res.send(product);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = app;
