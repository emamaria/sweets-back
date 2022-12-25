const { Router } = require('express');
const { check } = require('express-validator');
const { registerUser, loginUser, tokenUser } = require('../controllers/auth');
const { validateFields } = require('../middlewares/fields-validation');
const { validateJWT } = require('../middlewares/jwt-validation');


const router = Router();

router.post('/register',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required with correct format').isEmail(),
    check('password', 'Password required minimun 8 characters, 1 number, 1 speacial character, 1 uppercase, 1 lowercase').isStrongPassword(),
] , validateFields, registerUser)


router.post('/login',[
    check('email', 'Email is required with correct format').isEmail(),
    check('password', 'Password required minimun 8 characters, 1 number, 1 speacial character, 1 uppercase, 1 lowercase').isStrongPassword(),
], validateFields ,loginUser) 

//mando el token por el header y contrasto la firma
router.get('/token',validateJWT, tokenUser)









module.exports = router;