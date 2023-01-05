const { response } = require('express') 
const Drink = require('../models/Drink')


const getDrinks = async (req, res = response) => {
    try {
        const drinks = await Drink.find()
        res.status(200).json(drinks);
    } catch (error) {
        return res.json({
         ok: false,
         msg: "Cannot get drinks"
        })
    }
}

const getDrink = async (req, res = response) => {
    try {
        const {id} = req.params;
        const drink = await Drink.findById(id);
        res.status(200).json(drink);
    } catch (error) {
        return res.json({
         ok: false,
         msg: "Cannot get drink"
        })
    }
}


module.exports = { getDrinks, getDrink };