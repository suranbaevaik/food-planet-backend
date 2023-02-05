const { model, Schema } = require('mongoose');

const feedbackSchema = new Schema({
    image: String,
    name: String,
    text: String,
    date: String
})

module.exports = model('Feedback', feedbackSchema);