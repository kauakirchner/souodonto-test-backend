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
}