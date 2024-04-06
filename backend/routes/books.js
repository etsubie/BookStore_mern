import express from "express";
import {
  createBooks,
  deleteBooks,
  fecthBook,
  fetchBooks,
  updateBooks,
} from "../controllers/books.js";

const bookRouter = express.Router();

bookRouter.post("/create", createBooks);
bookRouter.get("/", fetchBooks);
bookRouter.get("/:id", fecthBook);
bookRouter.patch("/edit/:id", updateBooks);
bookRouter.delete("/delete/:id", deleteBooks);

export default bookRouter;
