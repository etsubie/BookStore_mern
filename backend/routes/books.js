import express from "express";
import { createBooks, fetchBooks } from "../controllers/books.js";

const bookRouter = express.Router();

bookRouter.post("/create", createBooks);
bookRouter.get("/", fetchBooks);

export default bookRouter;
