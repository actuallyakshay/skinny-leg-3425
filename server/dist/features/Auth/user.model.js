"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
var Role;
(function (Role) {
    Role["Admin"] = "Admin";
    Role["HR"] = "HR";
    Role["Guest"] = "Guest";
    Role["ProductManager"] = "ProductManager";
    Role["Doctor"] = "Doctor";
})(Role || (Role = {}));
var Gender;
(function (Gender) {
    Gender["Male"] = "Male";
    Gender["Female"] = "Female";
    Gender["Others"] = "Others";
})(Gender || (Gender = {}));
const userSchema = new mongoose_1.Schema({
    name: { type: String },
    email: { type: String },
    pinCode: { type: Number },
    password: { type: String },
    role: {
        type: String,
        enum: ["Admin", "HR", "Guest", "ProductManager", "Doctor"],
    },
    address: [],
    phoneNumber: { type: Number },
    age: { type: Number },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    user_image: String,
}, {
    versionKey: false,
    timestamps: true,
});
exports.User = (0, mongoose_1.model)("user", userSchema);
