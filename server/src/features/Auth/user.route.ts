import express, { Response, Request, IRouter, NextFunction } from "express";
import createHttpError from "http-errors";
import { Router } from "express";
import { IUser, User } from "./user.model";
import jwt, { sign, verify, Secret, JwtPayload } from "jsonwebtoken";
import bcrypt, { compare, hash } from "bcrypt";

const usersRouter: IRouter = Router();

usersRouter.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let users: IUser[] = await User.find();
      return res.status(200).send(users);
    } catch (error) {
      return next(createHttpError.InternalServerError);
    }
  }
);

usersRouter.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      let user: IUser | null = await User.findById({
        _id: req.params.id as string,
      });
      return res.status(200).send(user);
    } catch (error) {
      return res.status(501).send(error);
    }
  }
);

usersRouter.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password, phoneNumber }: IUser = req.body;
    password as string;
    try {
      if (phoneNumber) {
        let user: IUser | null = await User.findOne({
          phoneNumber: Number(phoneNumber),
        });
        if (user) {
          let token: string = jwt.sign(
            { _id: user._id, phoneNumber: Number(user.phoneNumber) },
            "17147714"
          );
          return res.send({ token: token, message: "User already Exist" });
        } else {
          let temp: IUser | null = await User.create({
            phoneNumber,
            role: "Guest",
          });
          const token1: string = jwt.sign({ _id: temp._id }, "17147714");
          return res.send({ token: token1 });
        }
      } else if (email) {
        let user: IUser | null = await User.findOne({ email });
        if (!user) {
          return res.status(404).send("Please Signup first");
        } else {
          let match: boolean = await bcrypt.compare(password, user.password);
          if (match) {
            let token: string = jwt.sign(
              { _id: user._id, name: user.name, role: user.role },
              "17147714"
            );
            return res.status(200).send({ token });
          } else {
            return res.status(404).send("invalid Password");
          }
        }
      }
    } catch (e: any) {
      return res.status(404).send(e.message);
    }
  }
);

usersRouter.post(
  "/signup",
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password, pinCode, phoneNumber, role }: IUser =
      req.body;
    try {
      let user = await User.findOne({ email });
      let pass: string = await bcrypt.hash(password, 10);
      if (user) {
        return res.status(400).send("user already exist");
      } else {
        let user = await User.create({
          ...req.body,
          password: pass,
        });
        return res.send(user);
      }
    } catch (error: any) {
      return res.send(error.message);
    }
  }
);

usersRouter.get(
  "/:id",
  async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.id;
    try {
      let user: IUser | null = await User.findOne({ _id: id });
      return res.send(user);
    } catch (e) {
      return res.send(e);
    }
  }
);

export default usersRouter;
