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
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const db_1 = require("./config/db");
const errorhandles_1 = require("./middleware/errorhandles");
const user_route_1 = __importDefault(require("./features/Auth/user.route"));
const product_route_1 = __importDefault(require("./features/product/product.route"));
(0, dotenv_1.config)();
const PORT = Number(process.env.PORT) || 8080;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(errorhandles_1.errorhandler);
app.use("/user", user_route_1.default);
app.use("/product", product_route_1.default);
app.get("/", (req, res) => {
    try {
        res.send("Hello  from  TS  APP");
    }
    catch (error) {
        res.send(error);
    }
});
const server = app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.connect)();
    console.log(`http://localhost:${PORT}`);
}));
