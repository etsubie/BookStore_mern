import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRouter from "./routes/books.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const MongoDBURL = process.env.CONNECTION_URL;

app.use(express.json());
app.use(cors());
app.use("/books", bookRouter);
app.get('/', (req, res) =>{
  console.log(req)
 res.json('welcome')
})

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log("mongoDB database is connected successfuly!");
    app.listen(port, () => {
      console.log(`server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log({message: error.message});
  });
