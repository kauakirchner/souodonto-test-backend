import { UserRepositorie } from "../../repositories/users/users.js";

export const UserService = {
    async create(payload) {
        try {
            const response = await UserRepositorie.create(payload);
            return response;
        } catch(error) {
            console.log({ error });
        }
    },
    async get() {
        try {
            const response = await UserRepositorie.find();
            return response;
        } catch(error) {
            console.log({ error });
        }
    },
}