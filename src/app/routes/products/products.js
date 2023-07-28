import { Router } from "express";
import { ProductController } from "../../controllers/products/product.js";

const router = Router();

router.route("/products/create").post((req, res) => ProductController.create(req, res));

router.route("/products").get((req, res) => ProductController.getAll(req, res));



export default router;