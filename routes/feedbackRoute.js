const Router = require('express');
const Feedback = require('../models/feedback');
const router = Router();

router.get('/', async  (req, res) => {
    try {
        const customers = await Feedback.find();

        return res.json(customers);

    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так. Попробуйте еще раз.' });
    }
})

router.get('/:id', async (req, res) => {
    try{
        const customer = await Feedback.findById(req.params.id);

        if (!customer) {
            return res
                .status(404)
                .json({ message: 'Товар не найден.' });
        }

        return res.json(customer);

    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так. Попробуйте еще раз.' });
    }
})

router.post('/', async (req, res) => {
    try {
        const { image, name, text, date } = req.body;

        const newFeedback = new Feedback( {
            image,
            name,
            text,
            date
        });

        await newFeedback.save();

        return res.status(201).json(newFeedback);

    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так. Попробуйте еще раз.' });
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const { image, name, text, date } = req.body;

        const customer = await Feedback.findById(req.params.id);

        if (!customer) {
            return res
                .status(404)
                .json({ message: 'Товар не найден.' });
        }

        Object.assign(customer, {
            image: image || customer.image,
            name: name || customer.name,
            text: text || customer.text,
            date: date || customer.date
        })

        await customer.save();

        return res.json(customer);

    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так. Попробуйте еще раз.' });
    }
})

module.exports = router;