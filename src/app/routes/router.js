import { Router } from "express";
import productRouters from "./products/products.js";
import userRoutes from "./users/users.js";

const router = Router();

router.use("/", productRouters);
router.use("/", userRoutes)

export default router