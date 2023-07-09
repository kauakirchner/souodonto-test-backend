import { Router } from "express";
import productRouters from "./products/products.js"

const router = Router();

router.use("/", productRouters);

export default router