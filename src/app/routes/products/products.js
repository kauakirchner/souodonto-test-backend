import { Router } from "express";
import { productController } from "../../controllers/products/product.js";

const router = Router();

router.route("/create").post((req, res) => productController.create(req, res))

export default router;