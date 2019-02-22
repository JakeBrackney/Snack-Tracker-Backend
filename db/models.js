const mongoose = require('./connection.js')

const CommentSchema = new mongoose.Schema({
  content: String,
  dateVisited: String
});

const RestaurantSchema = new mongoose.Schema({
  name: String,
  dateVisited: String,
  cuisine: String,
  city: String,
  budget: String,
  accolades: String,
  comments: [CommentSchema],
});

module.exports = 
  mongoose.model('Restaurant', RestaurantSchema),
  mongoose.model('Comment', CommentSchema)

