const jwt = require('jsonwebtoken')

const generateJWT = (id, name) => {

    const payload = {id, name}

   return new Promise((resolve, reject) => {
    jwt.sign(payload, process.env.JWT_SEED, {
        expiresIn: '24h',
      }, (err, token) => {
       if(err){
           reject(err)
       }else{
           resolve(token)
       }
      })
    })

}


module.exports = {
    generateJWT
}