const express = require("express");
const User = require("./auth.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const app = express.Router();

app.get("", async (req, res) => {
  try {
    let users = await User.find();
    return res.send(users);
  } catch (e) {
    res.send(e.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password, phoneNumber } = req.body;
  try {
    if (phoneNumber) {
      let user = await User.findOne({ phoneNumber: phoneNumber });
      if (user) {
        const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
        return res.send({ token });
      } else {
        let temp = await User.create({
          phoneNumber,
          role: "Guest",
        });
        const token1 = jwt.sign({ _id: temp._id }, process.env.SECRET_KEY);
        return res.send({ token: token1 });
      }
    } else if (email) {
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
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password, pinCode, phoneNumber } = req.body;
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
          phoneNumber,
          role: "Guest",
        });
        return res.send(user);
      }
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.patch("", async (req, res) => {
  const {
    name,
    email,
    pincode,
    password,
    address,
    phoneNumber,
    age,
    gender,
    user_image,
  } = req.body;
  const token = req.headers.token;
  try {
    if (!token) {
      return res.send("Missing token");
    } else {
      const decode = jwt.decode(token, process.env.SECRET_KEY);
      if (!decode) {
        return res.send("Wrong token");
      } else {
        let user = await User.findByIdAndUpdate(
          { _id: decode._id },
          {
            $set: {
              name,
              email,
              pincode,
              password,
              phoneNumber,
              age,
              gender,
              user_image,
            },
            $push: { address: address },
          }
        );
        return res.send(user);
      }
    }
  } catch (e) {
    req.status(404).Usersend(e.message);
  }
});

module.exports = app;
