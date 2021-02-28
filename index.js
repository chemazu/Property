const express = require("express");
const mongoose = require("mongoose");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/keys").mongURI;

//BODY PARSER "TO COLLECT DATA FROM FORMS"
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/", require("./routes/index"));
app.use("/users", require("./routes/users"));

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
