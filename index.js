const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const passport = require('./config/passport')()
const app = express();

const restaurantController = require('./controllers/restaurants')

app.set("port", process.env.PORT || 3001);

app.use('/api/restaurants', restaurantController)
app.use(parser.json());
app.use(cors());
app.use(passport.initialize())

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
  })

