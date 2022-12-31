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
        unique: true,
        trim: true
    },
    userId: { 
        type: String,
        required: true,
        trim: true
    }, 
    orderItems: {
        type: Array,
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
    orderDelivered: {
         type: Boolean,
         required: true,
         trim: true,
         default: true
        },
    transactionId: {
        type: String,
        required: true,
        trim: true}, 
    
},
{
    timestamps: true,
})


module.exports = model('Order', UserSchema)