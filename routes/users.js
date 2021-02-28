const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const passport = require("passport");

//BRINGING IN USER MODEL
const User = require("../models/user.model");
//LOGIN PAGE
router.get("/login", (req, res) => {
  res.status(200).json("login");
});

//REGISTER PAGE
router.get("/register", (req, res) => {
  res.status(200).json("register");
  console.log(req.body);
});

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedpassword = await bcrypt.hash(password, 10);

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
    console.log("register", { errors, name, email, password });
  } else {
    // res.send("pass");.
    //VALIDATION PASSED
    User.findOne({ email: email }).then((user) => {
      if (user) {
        //User Exist
        errors.push({ msg: "user already exists" });
        console.log("user Exists", errors);
      } else {
        const newUSer = new User({
          name,
          email,
          password: hashedpassword,
        });
        newUSer.save().then((user) => {
          res.redirect("/users/login");
          console.log(
            "flash message reg ",
            req.flash(
              "success_message.",
              "you are now registered and can login"
            )
          );
        });
      }
    });
  }
});
//login handle
router.post("/login", (req, res, next) => {
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/register",
    failureFlash: true,
  })(req, res, next);
});

module.exports = router;
