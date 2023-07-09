import mongoose from "mongoose";
const { Schema } = mongoose;

const typeString = { type: String, required: true };
const typeNumber = { type: Number, required: true };
const typeBoolean = { type: Boolean, required: false };

export const productSchema = new Schema({
        productImage: typeString,
        productName: typeString,
        productBrand: typeString,
        productQuantity: typeNumber,
        isProductRequired: typeBoolean,
    },
    { timestamps: true },
);

export const ProductRepositorie = mongoose.model("Product", productSchema)
 


