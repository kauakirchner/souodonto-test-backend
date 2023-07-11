import express from "express";
import cors  from "cors";
import { connectToMongoDB } from "./db/connect.js";
import routes from "./routes/router.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/products", routes)

connectToMongoDB();

const PORT = 3000;

app.listen(PORT, () => console.log("Server is running on port 3000"));