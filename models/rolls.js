const { model, Schema } = require('mongoose');

const rollsSchema = new Schema({
    image: String,
    title: String,
    description: String,
    price: Number
})

module.exports = model('Rolls', rollsSchema);