const { response } = require('express') 
const Order = require('../models/Order')


const getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders);
    } catch (error) {
        return res.json({
         ok: false,
         msg: "Cannot get orders"
        })
    }
}

const getOrder = async (req, res) => {
    try {
        const {id} = req.params;
        const order = await Order.findById(id);
        res.status(200).json(order);
    } catch (error) {
        return res.json({
         ok: false,
         msg: "Cannot get order"
        })
    }
}

const postOrder = async (req, res) => {
    try {
        const order = new Order(req.body);
        const orderDB = await order.save();
        return res.status(201).json(orderDB);
    } catch (error){
        return res.json({
         ok: false,
         msg: "Cannot post order"
        })
    }
}

const patchOrder = async (req, res) => {
    try {
        const {id} = req.params;
        const order = new Order(req.body);
        order._id = id;
        const updateOrder = await Order.findByIdAndUpdate(id, order);
        return res.status(200).json(updateOrder);
    } catch (error) {
        return res.json({
         ok: false,
         msg: "Cannot update order"
        })
    }
}

const deleteOrder = async (req, res) => {
    try {
        const {id} = req.params;
        const order = await Order.findByIdAndDelete(id);
        return res.status(200).json(order);
    } catch (error) {
        return res.json({
         ok: false,
         msg: "Cannot delete order"
        })
    }
}

module.exports = { getOrders, getOrder, postOrder,patchOrder, deleteOrder};
