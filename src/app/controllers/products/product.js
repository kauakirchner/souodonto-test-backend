import { ProductService } from "../../services/products/product.js";

export const ProductController = {
    async create(req, res) {
        if (!req.body) {
            res.status(400).json({ error: "BAD REQUEST, missing params!"});
            return false;
        }
        try {
            const payload = {
                productImage: req.body.productImage,
                productName: req.body.productName,
                productBrand: req.body.productBrand,
                productQuantity: req.body.productQuantity,
                isProductRequired: req.body.isProductRequired
            };


            const response = await ProductService.create(payload);

            res.status(201).json({ response, message: "Product created successfully!"});

        } catch(error) {
            console.log({ error });
            res.status(500).json({ error: "INTERN SERVER ERROR!"})
        }
    },

    async getAll(req, res) {
        try {
            const response = await ProductService.get();

            if (!response) {
                res.status(200).json({ message: "There's no products here!" });
                return false;
            }

            res.status(200).json(response);

        } catch(error) {
            console.log({ error });
            res.status(500).json({ error: "INTERN SERVER ERROR!"});
        }
    }
}