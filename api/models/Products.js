const mongoose = require("mongoose");

const prodSchema = mongoose.Schema({
  product_id: {
    type: Number,
    unique: true,
    min: 0
  },
  name: String,
  type: String,
  price: {
    type: Number,
    min: 0,
  },
  rating: {
    type: Number,
    min: 0,
  },
  warranty_years: {
    type: Number,
    min: 0,
  },
  available: Boolean
}, { collection: "produits"});

module.exports = mongoose.model("Products", prodSchema);
