const express = require('express')
const cors = require('cors')
const { dbConnect } = require('./db/db')
require('dotenv').config()

const app = express()

dbConnect()

app.use(express.static('public'))
//hago peticion de cualquier dominio
app.use(cors())

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/order', require('./routes/order'))

app.listen( process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
})


