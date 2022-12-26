import { IProduct, Product } from "./product.model";
import { IRouter, NextFunction, Request, Response, Router } from "express";

const productRouter: IRouter = Router();

type IPage = {
  page: string;
  limit: string;
  category: string;
  input: string;
  priceSort: string;
  offSort: string;
  priceArr: string;
  offArr: string;
  firstLetter: string;
};

productRouter.get(
  "",
  async (req: Request, res: Response, next: NextFunction) => {
    const {
      page = 1,
      limit = 30,
      category,
      input,
      priceSort,
      offSort,
      priceArr,
      offArr,
      firstLetter,
    } = req.query as IPage;
    try {
      if (category && firstLetter) {
        const temp = firstLetter;
        let products: IProduct[] = await Product.find({
          category: category,
          name: { $regex: "^" + temp, $options: "i" },
        }).limit(Number(limit));
        return res.send(products);
      } else if (category && offArr) {
        console.log(offArr);
        let [min, max]: Array<number> = priceArr.split(" - ").map(Number);

        let products: IProduct[] = await Product.find({
          category: category,
          $and: [{ off: { $gte: min } }, { off: { $lt: max } }],
        })
          .sort({ off: 1 })
          .limit(Number(limit));
        return res.status(200).send(products);
      } else if (category && priceArr) {
        let [min, max]: Array<number> = priceArr.split(" - ").map(Number);
        let products: IProduct[] = await Product.find({
          category: category,
          $and: [{ price1: { $gte: min } }, { price1: { $lt: max } }],
        })
          .sort({ price1: 1 })
          .limit(Number(limit));
        return res.status(200).send(products);
      } else if (category && priceSort) {
        if (priceSort === "asc") {
          let products: IProduct[] = await Product.find({ category })
            .sort({ price1: 1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
          return res.status(200).send(products);
        } else if (priceSort === "desc") {
          let products: IProduct[] = await Product.find({ category })
            .sort({ price1: -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
          return res.status(200).send(products);
        }
      } else if (category && offSort) {
        if (offSort === "asc") {
          let products: IProduct[] = await Product.find({ category })
            .sort({ off: 1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
          return res.status(200).send(products);
        } else if (offSort === "desc") {
          let products: IProduct[] = await Product.find({ category })
            .sort({ off: -1 })
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
          return res.status(200).send(products);
        }
      } else if (input) {
        let temp: RegExp = new RegExp(input, "i");
        let product: IProduct[] = await Product.find({ name: temp })
          .limit(Number(limit))
          .skip((Number(page) - 1) * Number(limit));
        return res.status(200).send(product);
      } else if (category) {
        let product: IProduct[] = await Product.find({ category })
          .skip((Number(page) - 1) * Number(limit))
          .limit(Number(limit));
        return res.status(200).send(product);
      }
      let product: IProduct[] = await Product.find()
        .skip((Number(page) - 1) * Number(limit))
        .limit(Number(limit));
      return res.status(200).send(product);
    } catch (error) {
      return res.status(500).send(error);
    }
  }
);

productRouter.delete(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let product: IProduct | null = await Product.findByIdAndDelete({
        _id: req.params.id as string,
      });
      return res.send("Deleted Successfully");
    } catch (error) {
      return res.status(500).send(error);
    }
  }
);

productRouter.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product: IProduct | null = await Product.findById({
        _id: req.params.id as string,
      });
      return res.status(200).send(product);
    } catch (error) {
      return res.send(error);
    }
  }
);

interface IBody {
  type: string;
  star?: number;
  user_name?: string;
  user_image?: string;
  title?: string;
}

productRouter.patch("/:id", async (req: Request, res: Response) => {
  const { type, star, user_name, user_image, title } = req.body as IBody;
  console.log(type, star);
  try {
    if (type === "ratings") {
      let product: IProduct | null = await Product.findByIdAndUpdate(
        {
          _id: req.params.id as string,
        },
        {
          $push: { ratings: star },
        }
      );
      return res.send(product);
    } else if (type === "reviews") {
      let product: IProduct | null = await Product.findByIdAndUpdate(
        {
          _id: req.params.id as string,
        },
        {
          $push: {
            reviews: {
              user_name: user_name,
              user_image: user_image,
              title: title,
            },
          },
        }
      );
      return res.send(product);
    }
  } catch (error) {
    return res.send(error);
  }
});

export default productRouter;
