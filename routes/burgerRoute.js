const Router = require('express');
const Burger = require('../models/burgers');
const router = Router();

router.get('/', async  (req, res) => {
    try {
        const products = await Burger.find();

        return res.json(products);

    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так. Попробуйте еще раз.' });
    }
})

router.get('/:id', async (req, res) => {
    try{
        const product = await Burger.findById(req.params.id);

        if (!product) {
            return res
                .status(404)
                .json({ message: 'Товар не найден.' });
        }

        return res.json(product);

    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так. Попробуйте еще раз.' });
    }
})

router.post('/', async (req, res) => {
    try {
        const { image, title, description, price } = req.body;

        const newBurger = new Burger( {
            image,
            title,
            description,
            price
        });

        await newBurger.save();

        return res.status(201).json(newBurger);

    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .json({ message: 'Что-то пошло не так. Попробуйте еще раз.' });
    }
})

router.patch('/:id', async (req, res) => {
        try {
            const { image, title, description, price } = req.body;

            const product = await Burger.findById(req.params.id);

            if (!product) {
                return res
                    .status(404)
                    .json({ message: 'Товар не найден.' });
            }

            Object.assign(product, {
                image: image || product.image,
                title: title || product.title,
                description: description || product.description,
                price: price || product.price
            })

            await product.save();

            return res.json(product);

        } catch (e) {
            console.log(e);
            return res
                .status(500)
                .json({ message: 'Что-то пошло не так. Попробуйте еще раз.' });
        }
    })


module.exports = router;