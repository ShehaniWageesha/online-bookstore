const express = require("express");
const { addBook, getAllBooks, getBookById, updateBook, deleteBook } = require("../controllers/book-controller.js");
const { verifyToken } = require("../helpers/auth-middleware.js");

const router = express.Router();

router.post("/create", verifyToken, addBook);
router.get("/", verifyToken, getAllBooks);
router.get("/:id", verifyToken, getBookById);
router.put("/update/:id", verifyToken, updateBook);
router.delete("/:id", verifyToken, deleteBook);

module.exports = router;
