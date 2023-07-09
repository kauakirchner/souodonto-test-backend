import { ProductModel } from "../../models/products/products.js"

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

            const response = await ProductModel.create(product);
            res
            .status(201)
            .json({ response, message: "Product created successfully!"})

        } catch(error) {
            console.log({ error })
        }
    },

    async getAll(req, res) {
        try {
            const products = await ProductModel.find();

            if (!products) {
                res.status(200).json({ data: "", message: "There's no products here!"})
            }

            res.status(200).json(products);
        } catch(error) {
            console.log({ error })
        }
    }
}