const { model, Schema } = require('mongoose');

const drinksSchema = new Schema({
    image: String,
    title: String,
    description: String,
    price: Number
})

module.exports = model('Drinks', drinksSchema);