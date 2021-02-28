const express = require("express");
const router = express.Router();

//welcome page
router.get("/", (req, res) => {
  res.status(200).json("welcome");
});

router.get("/dashboard", (req, res) => {
  res.status(200).json("dashboard");
});
module.exports = router;
