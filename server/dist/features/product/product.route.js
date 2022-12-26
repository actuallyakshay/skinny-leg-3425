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
Object.defineProperty(exports, "__esModule", { value: true });
const product_model_1 = require("./product.model");
const express_1 = require("express");
const productRouter = (0, express_1.Router)();
productRouter.get("", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { page, limit, category, input, priceSort, offSort, priceArr, offArr, } = req.query;
    try {
        if (category && offArr) {
            let [min, max] = priceArr.split(",").map(Number);
            let products = yield product_model_1.Product.find({ category }, {
                $and: [{ $gte: { off: min } }, { $lt: { off: max } }],
            });
            return res.status(200).send(products);
        }
        else if (category && priceArr) {
            let [min, max] = priceArr.split(",").map(Number);
            let products = yield product_model_1.Product.find({ category }, {
                $and: [{ $gte: { price1: min } }, { $lt: { price1: max } }],
            });
            return res.status(200).send(products);
        }
        else if (category && priceSort) {
            if (priceSort === "asc") {
                let products = yield product_model_1.Product.find({ category })
                    .sort({ price1: 1 })
                    .skip((Number(page) - 1) * Number(limit))
                    .limit(Number(limit));
                return res.status(200).send(products);
            }
            else if (priceSort === "desc") {
                let products = yield product_model_1.Product.find({ category })
                    .sort({ price1: -1 })
                    .skip((Number(page) - 1) * Number(limit))
                    .limit(Number(limit));
                return res.status(200).send(products);
            }
        }
        else if (category && offSort) {
            if (offSort === "asc") {
                let products = yield product_model_1.Product.find({ category })
                    .sort({ off: 1 })
                    .skip((Number(page) - 1) * Number(limit))
                    .limit(Number(limit));
                return res.status(200).send(products);
            }
            else if (offSort === "desc") {
                let products = yield product_model_1.Product.find({ category })
                    .sort({ off: -1 })
                    .skip((Number(page) - 1) * Number(limit))
                    .limit(Number(limit));
                return res.status(200).send(products);
            }
        }
        else if (category && input) {
            let temp = new RegExp(input, "i");
            let product = yield product_model_1.Product.find({ category, title: temp })
                .skip((Number(page) - 1) * Number(limit))
                .limit(Number(limit));
            return res.status(200).send(product);
        }
        else if (category) {
            let product = yield product_model_1.Product.find({ category })
                .skip((Number(page) - 1) * Number(limit))
                .limit(Number(limit));
            return res.status(200).send(product);
        }
        let product = yield product_model_1.Product.find()
            .skip((Number(page) - 1) * Number(limit))
            .limit(Number(limit));
        return res.status(200).send(product);
    }
    catch (error) {
        return res.status(500).send(error);
    }
}));
productRouter.delete("/:id", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let product = yield product_model_1.Product.findByIdAndDelete({
            _id: req.params.id,
        });
        return res.send("Deleted Successfully");
    }
    catch (error) {
        return res.status(500).send(error);
    }
}));
exports.default = productRouter;
