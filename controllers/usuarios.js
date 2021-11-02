const { response } = require('express')
const Usuario = require('../models/usuario')

const bcryptjs = require('bcryptjs')
const { validationResult } = require('express-validator')

const usuariosGet= async(req=request, res=response)=>{

    // const { q, nombre, apikey } = req.query
   
    const {limite=10, desde=0} =req.query
    const queryEstado = {estado: true}
    // const usuarios = await Usuario.find(queryEstado)
    //     .skip(Number(desde))
    //     .limit(Number(limite))
    // const total= await Usuario.countDocuments(queryEstado)

    const [total, usuario] = await Promise.all([
        Usuario.countDocuments(queryEstado),
        Usuario.find(queryEstado)
        .skip(Number(desde))
        .limit(Number(limite))
    ])
    
    res.json({
        total,
        usuario
    })
}


const usuariosPost= async (req, res=response)=>{
    const {nombre, correo, password, rol} = req.body
    const usuario= new Usuario({ nombre, correo, password, rol })
    // encriptar la contraseña
    const salt = bcryptjs.genSaltSync()
    usuario.password= bcryptjs.hashSync(password, salt)
    
    // guardar BD
    await usuario.save()
    res.json({
        usuario
    })
}
const usuariosPatch=(req, res=response)=>{

    res.json({
        msg: "patch API - Controller"
    })
}

const usuariosDelete= async(req, res=response)=>{

    const { id } = req.params

    // //Borrado fisico
    // const usuario = await Usuario.findByIdAndDelete(id)

    const usuario=await Usuario.findByIdAndUpdate(id, {estado: false})
    res.json({
        msg: "Usuario Eliminado",
        usuario
    })
}
const usuariosPut= async(req, res=response)=>{
    const id=req.params.id
    const {_id, password, google, correo, ...resto}= req.body

    //TODO validar contra base de datos
    if (password){
        // encriptar la contraseña
    const salt = bcryptjs.genSaltSync()
    resto.password= bcryptjs.hashSync(password, salt)
    }
    const usuario = await Usuario.findByIdAndUpdate(id, resto)


    res.json({
        msg: "put API - Controller", 
        usuario
    })
}






module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}