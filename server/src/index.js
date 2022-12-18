require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const connect = require("./config/db");
const PORT = process.env.PORT;
const userRoute = require("./features/auth/auth.route");
const productRoute = require("./features/product/product.route");
const cartRoute = require("./features/cart/cart.route");

const app = express();

const httpServer = http.createServer(app);

const io = new Server(httpServer);

io.on("connection", (conn) => {
  console.log("A new user connected");
});

app.use(express.json());
app.use(cors());
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/cart", cartRoute);

httpServer.listen(PORT, async (req, res) => {
  try {
    await connect();
    console.log(`http://localhost:${PORT}`);
  } catch (e) {
    res.send(e.message);
  }
});
