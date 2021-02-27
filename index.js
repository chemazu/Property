const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 4000;
const db = require("./config/keys").mongURI;

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
