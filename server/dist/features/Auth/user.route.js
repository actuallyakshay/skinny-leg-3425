"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const express_1 = require("express");
const user_model_1 = require("./user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const usersRouter = (0, express_1.Router)();
const Secretkey = String(process.env.SECRET_KEY);
usersRouter.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return res.send("hello from user side");
    }
    catch (error) {
        return next(http_errors_1.default.InternalServerError);
    }
}));
usersRouter.post("/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, phoneNumber } = req.body;
    password;
    try {
        if (phoneNumber) {
            let user = yield user_model_1.User.findOne({
                phoneNumber: Number(phoneNumber),
            });
            if (user) {
                let token = jsonwebtoken_1.default.sign({ _id: user._id, phoneNumber: Number(user.phoneNumber) }, Secretkey);
                return res.send({ token: token, message: "User already Exist" });
            }
            else {
                let temp = yield user_model_1.User.create({
                    phoneNumber,
                    role: "Guest",
                });
                const token1 = jsonwebtoken_1.default.sign({ _id: temp._id }, Secretkey);
                return res.send({ token: token1 });
            }
        }
        else if (email) {
            let user = yield user_model_1.User.findOne({ email });
            if (!user) {
                return res.status(404).send("Please Signup first");
            }
            else {
                let match = yield bcrypt_1.default.compare(password, user.password);
                if (match) {
                    let token = jsonwebtoken_1.default.sign({ _id: user._id, name: user.name, role: user.role }, Secretkey);
                    return res.status(200).send({ token });
                }
                else {
                    return res.status(404).send("invalid Password");
                }
            }
        }
    }
    catch (e) {
        return res.status(404).send(e.message);
    }
}));
usersRouter.post("/signup", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, pinCode, phoneNumber, role } = req.body;
    try {
        let user = yield user_model_1.User.findOne({ email });
        let pass = yield bcrypt_1.default.hash(password, 10);
        if (user) {
            return res.status(400).send("user already exist");
        }
        else {
            let user = yield user_model_1.User.create(Object.assign(Object.assign({}, req.body), { password: pass }));
            return res.send(user);
        }
    }
    catch (error) {
        return res.send(error.message);
    }
}));
usersRouter.get("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    try {
        let user = yield user_model_1.User.findOne({ _id: id });
        return res.send(user);
    }
    catch (e) {
        return res.send(e);
    }
}));
exports.default = usersRouter;
