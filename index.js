const express = require("express");
const parser = require("body-parser");
const cors = require("cors");

const app = express();

app.set("port", process.env.PORT || 3001);
app.use(parser.json());
app.use(cors());

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })

app.get("/api/restaurants", (req, res) => {
  Restaurant.find()
    .then(restaurants => {
      res.json(restaurants);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/api/restaurants", (req, res) => {
  Restaurant.create(req.body)
    .then(restaurant => {
      res.json(restaurant);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/api/restaurants/:id", (req, res) => {
  Restaurant.findById(req.params.id)
    .then(restaurant => {
      res.json(restaurant);
    })
    .catch(err => {
      console.log(err);
    });
});

app.delete("/api/restaurants/:id", (req, res) => {
  Restaurant.findOneAndRemove({ _id: req.params.id })
    .then(restaurant => {
      res.json(restaurant);
    })
    .catch(err => {
      console.log(err);
    });
});

app.put("api/restaurants/:id", (req, res) => {
  Bookmark.findOneAndUpdate({ _id: req.params.id })
    .then(restaurant => {
      res.json(restaurant);
    })
    .catch(err => {
      console.log(err);
    });
});
