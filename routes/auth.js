const { Router } = require('express');
const { registerUser, loginUser, tokenUser } = require('../controllers/auth');


const router = Router();

router.post('/register', registerUser)


router.post('/login', loginUser) 

//mando el token por el header y contrasto la firma
router.get('/token', tokenUser)









module.exports = router;