

require('dotenv').config()
const Server = require('./models/Server')


const server= new Server()

server.listen()






// ESTE ES EL EJERCICIO 100 DEL CURSO SERVIDOR CON FUNCIONES
// const express = require('express')
// const app = express()
// require('dotenv').config()

// const PORT=process.env.PORT
// app.get('/', function (req, res) {
//   res.send('Hello World hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
// })
 
// app.listen(PORT, ()=>console.log(`Corriendo en PORT: ${ PORT }`))