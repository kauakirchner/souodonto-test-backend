import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectToMongoDB = async () => {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect(process.env.MONGO_DB_URL);
    } catch(error) {
        console.log({ error });
    }
}