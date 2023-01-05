const { response } = require('express') 
const Sweet = require('../models/Sweet')


const getSweets = async (req, res = response) => {
    try {
        const sweets = await Sweet.find()
        res.status(200).json(sweets);
    } catch (error) {
        return res.json({
         ok: false,
         msg: "Cannot get sweets"
        })
    }
}

const getSweet = async (req, res = response) => {
    try {
        const {id} = req.params;
        const sweet = await Sweet.findById(id);
        res.status(200).json(sweet);
    } catch (error) {
        return res.json({
         ok: false,
         msg: "Cannot get sweet"
        })
    }
}


module.exports = { getSweets, getSweet };