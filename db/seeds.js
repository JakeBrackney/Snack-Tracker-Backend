const mongoose = require('./models.js')
const Restaurant = mongoose.model('Restaurant')
const restaurantData = require ('./restaurant-data.json')

Restaurant.remove({})
.then(()=> {
    Restaurant.collection.insert(restaurantData)
    .then((restaurants)=> {
        console.log(restaurants)
        process.exit()
    })
    .catch((err)=> {
        console.log(err)
    })
})