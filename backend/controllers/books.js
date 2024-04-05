import bookModel from "../models/book.js";

export const createBooks = async (req, res) => {
  const book = req.body;
  const newBook = new bookModel(book);
  try {
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const fetchBooks = async (req, res) => {
  try {
    const book = req.body;
    const books = await bookModel.find(book);
    res.json(books);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
