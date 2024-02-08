const express = require("express");
const { getAllUsers, signUp, signIn } = require("../controllers/user-controller.js");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/signup", signUp);
router.post("/signin", signIn);

module.exports = router;
