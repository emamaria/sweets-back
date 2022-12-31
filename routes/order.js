const { Router } = require('express');
const { check } = require('express-validator');
const {getOrders, getOrder, postOrder,patchOrder, deleteOrder} = require('../controllers/order');
const { validateFields } = require('../middlewares/fields-validation');
const { validateJWT } = require('../middlewares/jwt-validation');


const router = Router();

router.post('/',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required with correct format').isEmail(),
    check('userId', 'UserId is required').not().isEmpty(),
    check('orderItems', 'orderItems is required').not().isEmpty(),
    check('shippingAddress', 'shippingAddress is required').not().isEmpty(),
    check('orderPrice', 'orderPrice is required').not().isEmpty(),
    check('orderDelivered', 'orderDelivered status is required').not().isEmpty(),
    check('transactionId', 'transactionId is required').not().isEmpty(),
] , validateJWT, validateFields, postOrder)

router.get('/', validateJWT, getOrders)
router.get('/:id', validateJWT, getOrder)
router.patch('/:id', validateJWT, patchOrder)
router.delete('/:id', validateJWT, deleteOrder)


module.exports = router;