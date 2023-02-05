const { model, Schema } = require('mongoose');

const saladsSchema = new Schema({
    image: String,
    title: String,
    description: String,
    price: Number
})

module.exports = model('Salads', saladsSchema);