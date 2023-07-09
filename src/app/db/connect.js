import mongoose from "mongoose";

export const connectToMongoDB = async () => {
    try {
        mongoose.set("strictQuery", true);
        await mongoose.connect("mongodb+srv://kaua:kauakirchner@souodonto-test-db.lewyugh.mongodb.net/?retryWrites=true&w=majority");
    } catch(error) {
        console.log({ error });
    }
}