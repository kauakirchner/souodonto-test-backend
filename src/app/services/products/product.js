import { ProductRepositorie } from "../../repositories/products/products.js";

export const ProductService = {
    async create(payload) {
        try {
            const response = await ProductRepositorie.create(payload);
            return response;
        } catch(error) {
            console.log({ error })
            return error;
        }

    },

    async get() {
        try {
            const response = await ProductRepositorie.find();
            return response;
        } catch(error) {
            console.log({ error });
            return error;
        }
    },
}