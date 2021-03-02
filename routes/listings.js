//CRUD
const express = require("express");
const router = express.Router();
const listing = require("../models/listing.model");

//ADD A LISTING
router.post("/add", (req, res) => {
  const { title, location, description, more, date } = req.body;
  const newListing = new listing({ title, location, description, more });
  newListing
    .save()
    .then(() => {
      console.log("sent to db!!");
    })
    .catch((err) => {
      console.log(err);
    });
});
//GET ALL LISTINGS
router.get("/view", async (req, res) => {
  try {
    const listingCollection = await listing.find();
    res.status(200).json(listingCollection);
  } catch (error) {
    console.log("error is", error);
  }
});
//GET SPECIFIC LISTING
router.get("/view/:_id", async (req, res) => {
  try {
    const singleListing = await listing.findById(req.params._id);
    res.json(singleListing);
  } catch (error) {
    console.log(error);
  }
});

//UPDATE LISTING
router.patch("/view/:_id", async (req, res) => {
  try {
    const updatedPost = await listing.updateOne(
      { _id: req.params._id },
      { $set: { title: req.body.title } }
    );
  } catch (error) {
    console.log(error);
  }
});
//DELETE SPECIFIC POST
router.delete("/view/:_id", async (req, res) => {
  try {
    const removedListing = await listing.remove({ _id: req.params._id });
    res.json(removedListing);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
