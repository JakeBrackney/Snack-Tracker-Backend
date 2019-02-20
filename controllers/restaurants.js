const express = require('express')
const router = express.Router()

const Restaurant = require('../db/models.js')

//show all restaurant entries
router.get("/api/restaurants", (req, res) => {
    Restaurant.find()
      .then(restaurants => {
        res.json(restaurants);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  //create a restaurant entry 
  router.post("/api/restaurants", (req, res) => {
    Restaurant.create(req.body)
      .then(restaurant => {
        res.json(restaurant);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  //show restaurant by id
  router.get("/api/restaurants/:id", (req, res) => {
    Restaurant.findById(req.params.id)
      .then(restaurant => {
        res.json(restaurant);
      })
      .catch(err => {
        console.log(err);
      });
  });
  
  //delete one restaurant entry 
  router.delete("/api/restaurants/:id", (req, res) => {
    Restaurant.findOneAndRemove({ _id: req.params.id })
      .then(restaurant => {
        res.json(restaurant);
      })
      .catch(err => {
        console.log(err);
      });
  });
  //update a restaurant entry
  router.put("api/restaurants/:id", (req, res) => {
    Restaurant.findOneAndUpdate({ _id: req.params.id })
      .then(restaurant => {
        res.json(restaurant);
      })
      .catch(err => {
        console.log(err);
      })
  });
  
  module.exports = router