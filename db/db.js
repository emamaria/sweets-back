const mongoose  = require("mongoose")

const dbConnect = async() => {
  try {


   mongoose.set('strictQuery', true)
   await mongoose.connect(process.env.DB_CONNECT)
    
   console.log('Connected to DB')
  } catch (error) {
    console.log(error)
    throw new Error('error to connect to database')
  }
}

module.exports = {
    dbConnect 
}