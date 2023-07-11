import { createProduct } from "../../services/create/create.product.js";
import { getProducts } from "../../services/get/get.product.js";

export const productController = {
    async create(req, res) {
        try {
            const product = {
                productImage: req.body.productImage,
                productName: req.body.productName,
                productBrand: req.body.productBrand,
                productQuantity: req.body.productQuantity,
                isProductRequired: req.body.isProductRequired
            };

            const response = await createProduct(product)

            res.status(201).json({ response, message: "Product created successfully!"})

        } catch(error) {
            console.log({ error })
        }
    },

    async getAll(req, res) {
        try {
            const response = await getProducts();

            if (!response) {
                res.status(200).json({ message: "There's no products here!" })
                return false;
            }

            res.status(200).json(response);

        } catch(error) {
            console.log({ error })
        }
    }
}