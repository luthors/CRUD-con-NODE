
const Role= require('../models/role')
const Usuario = require('../models/usuario')



const esRolValido = async(rol = '')=>{

    const existeRol = await Role.findOne({ rol })
    if ( !existeRol ) {
            throw new Error(`El rol ${ rol } no está registrado en la DB`)
    }
}

const emailExiste = async( correo ='' )=>{
    const existeEmail = await Usuario.findOne({ correo })
    if ( existeEmail ){
            throw new Error(`El Correo ${ correo } ya existe, otro usuario lo registró`)
    }
}

const existeUsuarioPorId= async(id) => {
    const existeUsuario = await Usuario.findById(id)
    if ( !existeUsuario ){
            throw new Error(`El ID: ${ id } no existe`)
    }
}

module.exports= {
    esRolValido,
    emailExiste,
    existeUsuarioPorId
}