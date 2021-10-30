const { response } = require('express')

const usuariosGet=(req, res=response)=>{
    const { q, nombre, apikey } = req.query
    res.json({
        msg: "get API - Controller",
        q,
        nombre,
        apikey
    })
}
const usuariosPost=(req, res=response)=>{
    const { id, nombre, edad}=req.body
    res.json({
        msg: "post API - Controller",
        id,
        nombre, 
        edad 
    })
}
const usuariosPatch=(req, res=response)=>{

    res.json({
        msg: "patch API - Controller"
    })
}
const usuariosDelete=(req, res=response)=>{

    res.json({
        msg: "delete API - Controller"
    })
}
const usuariosPut=(req, res=response)=>{
    const id=req.params.id
    res.json({
        msg: "put API - Controller", 
        id
    })
}






module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}