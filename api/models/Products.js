const mongoose = require('mongoose')

const prodSchema = mongoose.Schema({
  product_id: {
    type: Number,
    unique: true
  },
  name: String,
  type: String,
  price: Number,
  rating: Number,
  warranty_years: Number,
  available: Boolean
}, { collection: 'produits'})

module.exports = mongoose.model("Products", prodSchema)
