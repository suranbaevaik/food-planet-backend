const express = require('express');
const mongoose = require('mongoose');
const burgerRoute = require('./routes/burgerRoute'),
      pizzaRoute = require('./routes/pizzaRoute'),
      sushiRoute = require('./routes/sushiRoute'),
      rollsRoute = require('./routes/rollsRoute'),
      saladsRoute = require('./routes/saladsRoute'),
      dessertRoute = require('./routes/dessertRoute'),
      drinksRoute = require('./routes/drinksRoute'),
      feedbackRoute = require('./routes/feedbackRoute');
const app = express();

const PORT = process.env.PORT || 3008;

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/burgers', burgerRoute);
app.use('/pizza', pizzaRoute);
app.use('/sushi', sushiRoute);
app.use('/rolls', rollsRoute);
app.use('/salads', saladsRoute);
app.use('/dessert', dessertRoute);
app.use('/drinks', drinksRoute);
app.use('/feedback', feedbackRoute);


const init = async () => {
    const MONGO_URL = 'mongodb+srv://aikanysh:OX9f9un6NouEOOBJ@foodplanet.8fgy7va.mongodb.net/?retryWrites=true&w=majority';

    await mongoose.connect(MONGO_URL);

    app.listen(PORT, () => {
        console.log('Server has been starting...');
    })
}

init();