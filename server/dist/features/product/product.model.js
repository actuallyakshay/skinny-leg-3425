"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    image: String,
    name: String,
    price1: Number,
    price2: Number,
    off: Number,
    quantity: Number,
    category: String,
    tablet: String,
    ingredients: String,
    company: String,
    testInclude: String,
    ratings: [],
    reviews: [
        {
            user_name: String,
            user_image: String,
            title: String,
        },
    ],
}, {
    timestamps: true,
    versionKey: false,
});
exports.Product = (0, mongoose_1.model)("product", productSchema);
