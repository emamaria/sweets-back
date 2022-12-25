const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
//hago peticion de cualquier dominio
app.use(cors())

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

app.listen( process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
})

