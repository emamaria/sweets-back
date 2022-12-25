const { response } = require('express') 
 
 const registerUser = (req, res = response) => {


    return res.json({
        ok: true,
        msg: 'user register'
    })
}


const loginUser =  (req, res) => {

    return res.json({
        ok: true,
        msg: 'user login'
    })
}

const tokenUser =  (req, res) => {

    return res.json({
        ok: true,
        msg: 'token'
    })
}



module.exports = {
    registerUser,
    loginUser,
    tokenUser
}