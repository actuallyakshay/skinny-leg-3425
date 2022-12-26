import { Schema, model, Document } from "mongoose";

export enum Role {
  Admin = "Admin",
  HR = "HR",
  Guest = "Guest",
  ProductManager = "ProductManager",
  Doctor = "Doctor",
}

export enum Gender {
  Male = "Male",
  Female = "Female",
  Others = "Others",
}

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  pinCode: number;
  password: string;
  role: Role;
  address: Array<string>;
  mobile: number;
  age: number;
  gender: Gender;
  user_image: string;
  phoneNumber: number;
  versionKey: Date;
  timestamps: Date;
}

const userSchema: Schema = new Schema<IUser>(
  {
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
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const User = model<IUser>("user", userSchema);
