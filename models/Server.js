const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../database/config')


class Server {
    constructor() {
        this.app=express()
        this.PORT=process.env.PORT

        //Path de Usuarios
        this.usuariosPath = '/api/usuarios'  

        
        // Conexion de la base de datos
        this.conectarDB()


        //Middlewares
        this.middlewares()


        //Rutas
        this.routes()
    }

    async conectarDB(){
        await dbConnection()
    }

    middlewares() {
        //CORS
        this.app.use(cors())

        //Lectura y parseo del body
        this.app.use(express.json())

        //Carpeta publica
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.PORT, ()=>{
            console.log(`Corriendo (clase) en PORT: ${ this.PORT }`)
        })
    }
    
}
 
module.exports = Server