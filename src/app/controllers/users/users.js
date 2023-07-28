import { UserService } from "../../services/users/users.js";
import { UserRepositorie } from "../../repositories/users/users.js";

export const UserController = {
    async createUser(req, res) {
        if (!req.body) {
            res.status(400).json({ error: "BAD REQUEST, missing data!"});
            return false;
        }

        const users = await UserRepositorie.find()
        users.forEach((user) => {
            if (user.email === req.body.userEmail) {
                throw new Error("User already exists!")
            }
        })

        try {
            const payload = {
                userName: req.body.userName,
                userEmail: req.body.userEmail,
                userPassword: req.body.userPassword,
            }

            const response = await UserService.create(payload);
            res.status(201).json({ data: response, message: "User created successfully!" });

        } catch(error) {
            console.log({ error });
            res.status(500).json({ error: "INTERN SERVER ERROR!"})
        }
    },

    async getUsers(req, res) {
        try {
            const response = await UserService.get();

            if (!response) {
                res.status(200).json({ message: "There's no users here!" });
                return false;
            }

            res.status(200).json(response);
        } catch(error) {
            console.log({ error });
            res.status(500).json({ error: "INTERN SERVER ERROR!"});
        }
    }
}