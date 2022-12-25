const { Router } = require('express')


const router = Router();

router.post('/register', (req, res) => {

    return res.json({
        ok: true,
        msg: 'user register'
    })
})


router.post('/login', (req, res) => {

    return res.json({
        ok: true,
        msg: 'user login'
    })
})

//mando el token por el header y contrasto la firma
router.get('/token', (req, res) => {

    return res.json({
        ok: true,
        msg: 'token'
    })
})









module.exports = router;