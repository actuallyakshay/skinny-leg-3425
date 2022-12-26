import mongoose, { model, Schema, Document, ObjectId } from "mongoose";

export interface ICart extends Document {
  versionKey: Date;
  timeStamps: Date;
  quantity: number;
  user: ObjectId;
  product: ObjectId;
}

const cartSchema = new Schema<ICart>(
  {
    quantity: { type: Number, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export const Cart = model<ICart>("cart", cartSchema);
