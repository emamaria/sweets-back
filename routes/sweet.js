const { Router } = require('express');
const {getSweets, getSweet } = require('../controllers/sweet');

const router = Router();

router.get('/', getSweets)
router.get('/:id', getSweet)



module.exports = router;