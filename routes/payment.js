const { Router } = require('express');
const {checkOut} = require('../controllers/payment');
const { validateJWT } = require('../middlewares/jwt-validation');


const router = Router();


router.post("/", validateJWT, checkOut)


module.exports = router;