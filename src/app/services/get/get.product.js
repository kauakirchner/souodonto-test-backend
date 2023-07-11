import { ProductRepositorie } from "../../repositories/products/products.js";

async function getProducts() {
    try {
        const response = await ProductRepositorie.find();
        return response;
    } catch(error) {
        console.log({ error });
        return error;
    }
}

export { getProducts }