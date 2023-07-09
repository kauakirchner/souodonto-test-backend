import { Router } from "express";
import { productController } from "../../controllers/products/product.js";

const router = Router();

router.route("/create").post((req, res) => productController.create(req, res));

router.route("/get-products").get((req, res) => productController.getAll(req, res));

export default router;