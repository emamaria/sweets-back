const express = require('express')
const cors = require('cors')
const { dbConnect } = require('./db/db')
require('dotenv').config()

const app = express()

dbConnect()

app.use(express.static('public'))
//hago peticion de cualquier dominio


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
  
  // app.use(
  //   cors({
  //     origin: ["http://localhost:3000"],
  //     credentials: true,
  //   })
  // );

  app.use(
    cors()
  );
  
  
  app.use(express.json({ limit: "5mb" }));
  
  app.use(
    express.urlencoded({
      limit: "5mb",
      extended: true,
    })
  );
  

// app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/order', require('./routes/order'))
app.use('/api/checkout', require('./routes/payment'))
app.use('/api/drink', require('./routes/drink'))
app.use('/api/sweet', require('./routes/sweet'))


app.listen( process.env.PORT, () => {
    console.log(`server running on port ${process.env.PORT}`)
})


