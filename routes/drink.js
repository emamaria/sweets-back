const { Router } = require('express');
const {getDrinks, getDrink } = require('../controllers/drink');

const router = Router();

router.get('/', getDrinks)
router.get('/:id', getDrink)



module.exports = router;