import { createProduct } from "../../services/create/create.product.js";
import { getProducts } from "../../services/get/get.product.js";

export const productController = {
    async create(req, res) {
        if (!res.body) {
            res.status(400).json({ error: "BAD REQUEST, missing params!"});
            return false;
        }
        try {
            const product = {
                productImage: req.body.productImage,
                productName: req.body.productName,
                productBrand: req.body.productBrand,
                productQuantity: req.body.productQuantity,
                isProductRequired: req.body.isProductRequired
            };


            const response = await createProduct(product);

            res.status(201).json({ response, message: "Product created successfully!"});

        } catch(error) {
            console.log({ error });
            res.status(500).json({ error: "INTERN SERVER ERROR!"})
        }
    },

    async getAll(req, res) {
        try {
            const response = await getProducts();

            if (!response) {
                res.status(200).json({ message: "There's no products here!" });
                return false;
            }

            res.status(200).json(response);

        } catch(error) {
            console.log({ error });
            res.status(500).json({ error: "INTERN SERVER ERROR!"})
        }
    }
}