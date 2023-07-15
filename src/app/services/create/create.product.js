import { ProductRepositorie } from "../../repositories/products/products.js";

async function createProduct(payload) {
    try {
        const response = await ProductRepositorie.create(payload);
        return response;
    } catch(error) {
        console.log({ error })
        return error;
    }

}

export { createProduct }