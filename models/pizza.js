const { model, Schema } = require('mongoose');

const pizzaSchema = new Schema({
    image: String,
    title: String,
    description: String,
    price: Number
})

module.exports = model('Pizza', pizzaSchema);