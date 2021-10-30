const{ Router } = require('express')
const { usuariosGet, 
        usuariosPost, 
        usuariosPatch, 
        usuariosDelete, 
        usuariosPut } = require('../controllers/usuarios')

const router=Router()

router.get('/', usuariosGet)
router.post('/', usuariosPost)
router.patch('/', usuariosPatch)
router.delete('/', usuariosDelete)
router.put('/:id', usuariosPut)

module.exports=router