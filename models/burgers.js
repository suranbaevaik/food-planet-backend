const { model, Schema } = require('mongoose');

const burgerSchema = new Schema({
    image: String,
    title: String,
    description: String,
    price: Number
})


module.exports = model('Burger', burgerSchema);