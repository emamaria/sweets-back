const {response} = require('express')
const { validationResult } = require('express-validator')

const  validateFields = (req, res = response, next) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        //al no cumplir el requisito el campo mando un mensaje de error que viene dentro 
        //del objeto error
       return res.status(400).json({
        ok:false,
        errors: errors.mapped()
       })
    }
    
    next()
}


module.exports = {
    validateFields 
}
