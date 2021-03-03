const mongoose = require("mongoose");
const schema = mongoose.Schema;

const listingSchema = new schema(
  {
    userId: { type: String, required: false },
    title: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    more: { type: String, required: true },
  },
  { timestamps: true }
);

const listing = mongoose.model("listing", listingSchema);
module.exports = listing;
