const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const userRouter = require("./routes/user-routes.js");
const bookRouter = require("./routes/book-routes.js");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/book", bookRouter);

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => app.listen(PORT))
  .then(() =>
    console.log(`Connected to the database and listening at PORT ${PORT}`)
  )
  .catch((err) => console.log(err));
