const express = require("express");
const router = express.Router();

//LOGIN PAGE
router.get("/login", (req, res) => {
  res.status(200).json("login");
});

//REGISTER PAGE
router.get("/register", (req, res) => {
  res.status(200).json("register");
  console.log(req.body);
});

router.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  let errors = [];
  //validation
  //check required fields
  if (!name || !email || !password) {
    errors.push({ msg: "Please fill all the fields" });
  }
  //check password
  if (password.length < 8) {
    errors.push({ msg: "password should be more than 8 characters" });
  }
  if (errors.length > 0) {
    // res.render("register", { errors, name, email, password });
    console.log("register", { errors });
    console.log(name);
  } else {
    res.send("pass");
  }
});
module.exports = router;
