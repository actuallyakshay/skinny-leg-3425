import express, {
  IRouter,
  NextFunction,
  Request,
  Response,
  Router,
} from "express";
import { Cart, ICart } from "./cart.model";
import jwt, { JwtPayload } from "jsonwebtoken";
import { IUser, User } from "../Auth/user.model";
import { IProduct, Product } from "../product/product.model";

const cartRouter: IRouter = Router();

const authMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.token as string;
  try {
    if (!token) {
      return res.send("Missing Token");
    } else {
      const decoded = jwt.verify(token, "17147714") as JwtPayload;
      if (decoded) {
        let user: IUser | null = await User.findOne({ _id: decoded._id });
        if (user) {
          req.body.userId = user._id;
          next();
        } else {
          return res.send("user doesn't exist");
        }
      } else {
        return res.status(404).send("Invalid token");
      }
    }
  } catch (error) {
    return res.send(error);
  }
};

cartRouter.get("/", authMiddleWare, async (req: Request, res: Response) => {
  try {
    const cart: ICart[] = await Cart.find({ user: req.body.userId }).populate([
      "user",
      "product",
    ]);
    return res.send(cart);
  } catch (error) {
    return res.send(error);
  }
});

cartRouter.post("", authMiddleWare, async (req: Request, res: Response) => {
  try {
    let dbProduct = (await Product.findOne({
      _id: req.body.product,
    })) as IProduct;
    let cartItem = (await Cart.findOne({ product: req.body.product })) as ICart;
    if (cartItem) {
      if (req.body.type == "inc") {
        if (Check(dbProduct, req.body.quantity)) {
          return res.send({
            status: 0,
            message: `Database have only ${dbProduct.quantity} quantity of this item`,
          });
        } else {
          let cart = await Cart.findOneAndUpdate(
            { product: req.body.product },
            { $inc: { quantity: 1 } }
          );
          await Product.findByIdAndUpdate(
            { _id: req.body.product },
            { $inc: { quantity: -1 } }
          );
          return res.send(cart);
        }
      } else if (req.body.type == "dec") {
        if (cartItem.quantity == 1) {
          await Cart.findOneAndDelete({ product: req.body.product });
          await Product.findByIdAndUpdate(
            { _id: req.body.product },
            { $inc: { quantity: 1 } }
          );
          return res.send("Deleted");
        } else {
          let cart = await Cart.findOneAndUpdate(
            { product: req.body.product },
            { $inc: { quantity: -1 } }
          );
          await Product.findByIdAndUpdate(
            { _id: req.body.product },
            { $inc: { quantity: 1 } }
          );
          return res.send(cart);
        }
      } else if (req.body.type == "" || !req.body.type) {
        return res.send("Type is missing");
      }
    } else {
      if (Check(dbProduct, req.body.quantity)) {
        return res.send({
          status: 0,
          message: `Database have only ${dbProduct.quantity} quantity of this item`,
        });
      } else {
        let cartItem = await Cart.create({
          ...req.body,
          user: req.body.userId,
        });
        await Product.findByIdAndUpdate(
          { _id: req.body.product },
          { $inc: { quantity: -1 } }
        );
        return res.send(cartItem);
      }
    }
  } catch (error) {
    return res.send(error);
  }
});

function Check(dbProduct: IProduct, qty: number): boolean {
  if (dbProduct.quantity < qty) {
    return true;
  } else {
    return false;
  }
}

cartRouter.delete(
  "/:id",
  authMiddleWare,
  async (req: Request, res: Response) => {
    console.log(req.params.id as string);
    try {
      let cart = (await Cart.findById({
        _id: req.params.id as string,
      })) as ICart;

      let product = await Product.findByIdAndUpdate(
        { _id: cart.product },
        {
          $inc: { quantity: cart.quantity },
        }
      );
      await Cart.findByIdAndDelete({ _id: req.params.id as string });
      return res.send(product);
    } catch (error) {
      return res.send(error);
    }
  }
);

export default cartRouter;
