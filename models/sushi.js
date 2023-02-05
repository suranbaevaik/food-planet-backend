const { model, Schema } = require('mongoose');

const sushiSchema = new Schema({
    image: String,
    title: String,
    description: String,
    price: Number
})

module.exports = model('Sushi', sushiSchema);