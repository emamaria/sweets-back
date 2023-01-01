const { response } = require('express') 
const User = require('../models/User')
const bcrypt = require('bcrypt')
const { generateJWT } = require('../helpers/jwt')

 
 const registerUser = async(req, res = response) => {

    console.log(req.body)

    const {email, name, password} = req.body

     console.log(email, name, password)

     try {

        const user = await User.findOne({email: email})

        if(user){
            return res.status(400).json({
                ok: false,
                msg: 'the email already exists'
            })
        }


       const userDB = new User(req.body)

       const salt = bcrypt.genSaltSync()

       userDB.password = bcrypt.hashSync(password, salt)

       const token = await generateJWT(userDB.id, name)

      await userDB.save()

      return res.status(201).json({
        ok:true,
        id: userDB.id,
        name: name,
        email: email,
        token: token
      })
        
     } catch (error) {
        return res.json({
            ok: false,
            msg: 'call the admin'
        })
     }

   
}


const loginUser =  async(req, res) => {

    const {password, email} = req.body;

    console.log(password, email)

    try {

        const userDB = await User.findOne({email:email})

        if(!userDB){
            return res.status(400).json({
                ok: false,
                msg: 'this email doesnt exist'
            })
        }

     const validPassword = bcrypt.compareSync(password, userDB.password)

     if(!validPassword){
        return res.status(400).json({
            ok: false,
            msg: 'this password isnt correct'
        })
     }


     const token = await generateJWT(userDB.id, userDB.name)

     return res.json({
        ok: true,
        id: userDB.id,
        email: email,
        name: userDB.name,
        token: token
     })
        
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: true,
            msg: 'call the admin'
        })
    }

    
 
}

const tokenUser =  async(req, res) => {

 
    const {id, name} = req;

    const token = await generateJWT(id, name)

    const user = await User.findById(id);

        
    const email = user.email

    return res.json({
        ok: true,
        id: id,
        name: name,
        email: email,
        token: token,
        msg: 'ok token',
        
      
        
    
    })
}



module.exports = {
    registerUser,
    loginUser,
    tokenUser
}