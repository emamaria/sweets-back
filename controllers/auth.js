const { response } = require('express') 
const { validationResult } = require('express-validator')
 
 const registerUser = (req, res = response) => {

    const errors = validationResult(req)

    if(!errors.isEmpty()){
        //al no cumplir el requisito el campo mando un mensaje de error que viene dentro 
        //del objeto error
       return res.status(400).json({
        ok:false,
        errors: errors.mapped()
       })
    }


  
    console.log(req.body)

    const {email, name, password} = req.body

    console.log(email, name, password)

    return res.json({
        ok: true,
        msg: 'user register'
    })
}


const loginUser =  (req, res) => {

    //si algun campo no cumple con el requisito, se almacena el error aqui
    //capto los errores procedenters de los middlewares check
    const errors = validationResult(req)

    //si dentro de errors hay algo, no esta vacío es que hay un error en la validacion
    if(!errors.isEmpty()){
        //al no cumplir el requisito el campo mando un mensaje de error que viene dentro 
        //del objeto error
       return res.status(400).json({
        ok:false,
        errors: errors.mapped()
       })
    }
    console.log(errors)

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