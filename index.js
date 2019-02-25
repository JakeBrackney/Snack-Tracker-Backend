const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const Restaurant = require('./db/models') 
const Comment = require('./db/models')

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(parser.json());
app.use(cors());

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })

//show all restaurant entries
app.get("/api/restaurants", (req, res) => {
  Restaurant.find()
    .then(restaurants => {
      res.json(restaurants);
    })
    .catch(err => {
      console.log(err);
    });
});

//create a restaurant entry 
app.post("/api/restaurants", (req, res) => {
  Restaurant.create(req.body)
    .then(restaurant => {
      res.json(restaurant);
    })
    .catch(err => {
      console.log(err);
    });
});

//show restaurant by id
app.get("/api/restaurants/:id", (req, res) => {
  Restaurant.findById(req.params.id)
    .then(restaurant => {
      res.json(restaurant);
    })
    .catch(err => {
      console.log(err);
    });
});

//update a restaurant entry
app.put("/api/restaurants/:id", (req, res) => {
  console.log("put");
  console.log(req.body);
  // findone
  // then
  // restaurant.comments.push({comment: req.body.comment})
  Restaurant.findOne({ _id: req.params.id })
    .then(restaurant => {
      restaurant.comments.push({content: req.body.newComment, dateVisited: req.body.dateVisited})
      restaurant.save()
      res.json(restaurant);
    })
    .catch(err => {
      console.log(err);
    })
 });

  // retrieve a comment
  app.get('/api/restaurants/:id', (req, res) => {
    console.log(restaurant.comments) 
    Comment.findOne({ content: req.body.comment })
    .then(comment => {
      restaurant.comments.filter({ content: req.body.comment })
      res.json(comment)
    })
    .catch(err => {
      console.log(err)
    })
  })
 
  // update comment
  app.put('/api/restaurants/:id', (req, res) => {
    Comment.findOneAndUpdate({ _id: req.params.id })
    .then(comment => {
      res.json(comment)
      console.log("update attempted")
    })
    .catch(err => {
      console.log(err)
    })
  })

//delete one restaurant entry
app.delete("/api/restaurants/:id", (req, res) => {
 Restaurant.findOneAndRemove({ _id: req.params.id })
   .then(restaurant => {
     res.json(restaurant);
   })
   .catch(err => {
     console.log(err);
   });
});