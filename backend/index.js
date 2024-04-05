import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

const port = process.env.PORT
const MongoDBURL = process.env.CONNECTION_URL

app.get("/", (req, res) => {
  console.log(req)
  return res.status(200).send("welcome")
})

mongoose
  .connect(MongoDBURL)
  .then(() => {
    console.log('mongoDB database is connected successfuly!')
    app.listen(port, () => {
      console.log(`server is running on port: ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
