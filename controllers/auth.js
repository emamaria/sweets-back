const { response } = require('express') 
const User = require('../models/User')

 
 const registerUser = async(req, res = response) => {

    console.log(req.body)

    const {email, name, password} = req.body

     console.log(email, name, password)

     try {

        const user = await User.findOne({email: email})

        if(user){
            return res.status(400).json({
                ok: false,
                msg: 'the user already exists'
            })
        }


       const userDB = new User(req.body)

      await userDB.save()

      return res.status(201).json({
        ok:true,
        id: userDB.id,
        name: name,
        email: email
      })
        
     } catch (error) {
        return res.json({
            ok: false,
            msg: 'call the admin'
        })
     }

   
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