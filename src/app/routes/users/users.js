import { Router } from "express";
import { UserController } from "../../controllers/users/users.js";

const router = Router();

router.route("/users/create").post((req, res) => UserController.createUser(req, res));

router.route("/users").get((req, res) => UserController.getUsers(req, res));

export default router;