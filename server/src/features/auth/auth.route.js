const express = require("express");
const User = require("./auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { findOne } = require("./auth.model");
const app = express.Router();

app.get("", async (req, res) => {
  try {
    res.send("Hello User");
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("Please Signup first");
    } else {
      let match = await bcrypt.compare(password, user.password);
      if (match) {
        let token = jwt.sign(
          { _id: user._id, name: user.name },
          process.env.SECRET_KEY
        );
        return res.status(200).send({ token });
      } else {
        return res.status(404).send("invalid Password");
      }
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password, pinCode } = req.body;
  const token = req.headers.token;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).send("user already exist");
    } else {
      if (!token) {
        let pass = await bcrypt.hash(password, 10);
        let user = await User.create({
          name,
          email,
          password: pass,
          pinCode,
          role: "Guest",
        });
        return res.send(user);
      }
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = app;
