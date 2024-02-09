const Book = require("../models/Book.js");

const addBook = async (req, res) => {
  const { title, author, image, description, price, availableStock } = req.body;
  const book = new Book({
    title,
    author,
    image,
    description,
    price,
    availableStock
  });

  try {
    await book.save();
  } catch (error) {
    return res.status(500).json({ message: "Adding book failed!" });
  }

  return res.status(201).json({ message: "Book added successfully!", book });
};

const getAllBooks = async (req, res) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    return res.status(500).json({ message: "Fetching books failed!" });
  }

  if (!books) {
    return res.status(404).json({ message: "No books found!" });
  }
  return res.status(200).json({ books });
};

const getBookById = async (req, res) => {
  const bookId = req.params.id;

  let book;
  try {
    book = await Book.findById(bookId);
  } catch (err) {
    return res.status(404).json({ message: "Book not found!" });
  }

  return res.status(200).json({ book });
};

const updateBook = async (req, res) => {
  const bookId = req.params.id;
  const { title, author, image, description, price, availableStock } = req.body;

  let book;
  try {
    book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found!" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Error finding book!" });
  }

  if (title !== undefined) {
    book.title = title;
  }
  if (author !== undefined) {
    book.author = author;
  }
  if (image !== undefined) {
    book.image = image;
  }
  if (description !== undefined) {
    book.description = description;
  }
  if (price !== undefined) {
    book.price = price;
  }
  if (availableStock !== undefined) {
    book.availableStock = availableStock;
  }

  try {
    await book.save();
    return res
      .status(200)
      .json({ message: "Book updated successfully!", book });
  } catch (err) {
    return res.status(500).json({ message: "Updating book failed!" });
  }
};

const deleteBook = async (req, res) => {
  const bookId = req.params.id;

  let book;
  try {
    book = await Book.findById(bookId);
  } catch (err) {
    return res.status(404).json({ message: "Book not found!" });
  }

  try {
    await book.deleteOne();
  } catch (err) {
    return res.status(500).json({ message: "Deleting book failed!", err });
  }

  return res.status(200).json({ message: "Book deleted successfully!" });
};

module.exports = {
  addBook,
  getAllBooks,
  getBookById,
  updateBook,
  deleteBook,
};
