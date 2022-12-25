const { Router } = require('express');
const { check } = require('express-validator');
const { registerUser, loginUser, tokenUser } = require('../controllers/auth');


const router = Router();

router.post('/register',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required with correct format').isEmail(),
    check('password', 'Password required minimun 8 characters, 1 number, 1 speacial character, 1 uppercase, 1 lowercase').isStrongPassword(),
] ,registerUser)


router.post('/login',[
    check('email', 'Email is required with correct format').isEmail(),
    check('password', 'Password required minimun 8 characters, 1 number, 1 speacial character, 1 uppercase, 1 lowercase').isStrongPassword(),
], loginUser) 

//mando el token por el header y contrasto la firma
router.get('/token', tokenUser)









module.exports = router;