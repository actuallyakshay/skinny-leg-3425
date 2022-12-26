import { config } from "dotenv";
import express, {
  Request,
  Response,
  Application,
  ErrorRequestHandler,
} from "express";
import { Server } from "http";
import { connect } from "./config/db";
import { errorhandler } from "./middleware/errorhandles";
import usersRouter from "./features/Auth/user.route";
import productRouter from "./features/product/product.route";
import cors from "cors";
import cartRouter from "./features/cart/cart.route";

config();

const PORT: number = Number(process.env.PORT) || 8080;

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorhandler);
app.use(cors());
app.use("/user", usersRouter);
app.use("/product", productRouter);
app.use("/cart", cartRouter);

app.get("/", (req: Request, res: Response) => {
  try {
    res.send("Hello  from  TS  APP");
  } catch (error) {
    res.send(error);
  }
});

const server: Server = app.listen(PORT, async () => {
  await connect();
  console.log(`http://localhost:${PORT}`);
});
