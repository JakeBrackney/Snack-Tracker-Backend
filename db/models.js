const mongoose = require('./connection.js')

const RestaurantSchema = new mongoose.Schema({
  name: String,
  dateVisited: String,
  cuisine: String,
  city: String,
  budget: String,
  accolades: String,
  notes: String
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)