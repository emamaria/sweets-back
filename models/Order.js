const { Schema, model } = require("mongoose");

const OrderSchema = Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    userId: { 
        type: String,
        required: true,
        trim: true
    }, 
    orderItems: {
        type: [],
        required: true,
        trim: true 
    },
    shippingAddress: {
        type: Object,
        required: true, 
        trim: true
    },
    orderPrice: {
        type: Number,
        required: true, 
        trim: true
    },
    orderStatus: {
         type: String,
         required: true,
         trim: true,
         default: "Accepted"
        },
    transactionId: {
        type: String,
        required: true,
        trim: true}, 
    
},
{
    timestamps: true,
})


module.exports = model('Order', OrderSchema)