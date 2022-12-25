const { response } = require('express') 

 
 const registerUser = (req, res = response) => {

    console.log(req.body)

    const {email, name, password} = req.body

    console.log(email, name, password)

    return res.json({
        ok: true,
        msg: 'user register'
    })
}


const loginUser =  (req, res) => {

   

    const {password, email} = req.body;

    console.log(password, email)
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