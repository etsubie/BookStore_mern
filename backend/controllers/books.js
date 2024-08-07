import bookModel from "../models/book.js";

export const createBooks = async (req, res) => {
  try {
    const book = req.body;
    const newBook = new bookModel(book);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fetchBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json( books );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const fecthBook = async (req, res) => {
  try {
    const { id } = req.params;
    const Book = await bookModel.findById(id);
    if (!Book) {
      return res.status(404).send({ message: "Book Not Found" });
    }
    res.status(200).json(Book);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateBooks = async (req, res) => {
  try {
    const { id } = req.params;
    const book = req.body;

    const updatedBook = await bookModel.findByIdAndUpdate(id, book, {
      new: true,
    });
    if (!updatedBook) {
      return res.status(404).json({ message: " Book Not Found!" });
    }
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await bookModel.findByIdAndDelete(id);
    if (!deletedBook) {
      return res.status(404).json({ message: "Book Not Found!" });
    }
    res.status(200).json("Book Deleted Successfuly");
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
