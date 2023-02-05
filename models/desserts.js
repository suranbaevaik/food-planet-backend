const { model, Schema } = require('mongoose');

const dessertSchema = new Schema({
    image: String,
    title: String,
    description: String,
    price: Number
})

module.exports = model('Dessert', dessertSchema);