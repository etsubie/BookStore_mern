import express from "express";
import {
  createBooks,
  deleteBook,
  fecthBook,
  fetchBooks,
  updateBooks,
} from "../controllers/books.js";

const bookRouter = express.Router();

bookRouter.post("/create", createBooks);
bookRouter.get("/", fetchBooks);
bookRouter.get("/:id", fecthBook);
bookRouter.patch("/edit/:id", updateBooks);
bookRouter.delete("/delete/:id", deleteBook);

export default bookRouter;
