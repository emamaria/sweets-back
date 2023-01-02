const { response } = require("express")

const jwt = require('jsonwebtoken')


const validateJWT = (req, res = response,next) => {
    const token = req.header('user-token')

   

    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'token error'
        })
    }

    try {
      const {id, name} = jwt.verify(token, process.env.JWT_SEED);
       console.log(id, name)

       req.id = id;
       req.name = name;
    } catch (error) {
          
      return res.status(401).json({
        ok: false,
        msg: 'invalid token'
      })
    }

  next()
}



module.exports = {
    validateJWT
}