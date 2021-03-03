const express = require("express");
const mongoose = require("mongoose");
// const expressLayouts = require("express-ejs-layouts");
const flash = require("connect-flash");
const session = require("express-session");
const passport = require("passport");

const app = express();
const PORT = process.env.PORT || 4000;

//passport config
require("./config/passport")(passport);

//database config
const db = require("./config/keys").mongURI;

//BODY PARSER "TO COLLECT DATA FROM FORMS"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//EXPRESS SESSION
app.use(
  session({
    secret: "keyboard cat",
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);

// INTIALIZING PASSPORT
app.use(passport.initialize());
app.use(passport.session());

//CONNECT FLASH
app.use(flash());

// GLOBAL VARIABLE (INSTEAD OF REPEATING FLASH MESSAGES)
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success message");
  res.locals.error_msg = req.flash("error message");
  next();
});

//ROUTES
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));
app.use("/listings", require("./routes/listings"));

//CONNECTING MONGOOSE
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("mongodb running"))
  .catch((err) => console.log("the error is", err));

//STARTING THE SERVER
app.listen(PORT, console.log(`server started on port ${PORT}`));
