const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 255,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  availableStock: {
    type: Number,
    required: true,
    min: 0,
  },
});

module.exports = mongoose.model("Book", bookSchema);
