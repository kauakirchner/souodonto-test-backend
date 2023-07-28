import mongoose from "mongoose";
const { Schema } = mongoose;

const typeString = { type: String, required: true };

export const userSchema = new Schema({
        userName: typeString,
        userEmail: typeString,
        userPassword: typeString
    },
    { timestamps: true },
);

export const UserRepositorie = mongoose.model("User", userSchema)
 


