const express = require('express')
const cors = require('cors')

const app = express()
//hago peticion de cualquier dominio
app.use(cors())

app.use(express.json())

app.use('/api/auth', require('./routes/auth'))

app.listen( 4000, () => {
    console.log(`server running on port ${4000}`)
})


