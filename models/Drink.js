const { Schema, model } = require("mongoose");

const DrinkSchema = Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    category: { 
        type: String,
        required: true,
        trim: true
    }, 
    img: {
        type: String,
        required: true,
        trim: true 
    },
    description: {
        type: String,
        required: true, 
        trim: true
    }
},
{
    timestamps: true,
})


module.exports = model('Drink', DrinkSchema)