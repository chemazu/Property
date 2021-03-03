const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

//welcome page
router.get("/", (req, res) => {
  res.status(200).json("welcome");
});

router.get("/dashboard", ensureAuthenticated, (req, res) => {
  res.status(200).json(`Welcome to ${req.user.name}'s Dashboard`, req.user);
});
module.exports = router;
