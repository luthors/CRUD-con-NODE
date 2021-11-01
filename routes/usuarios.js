const{ Router } = require('express')
const { check } = require('express-validator')
const { usuariosGet, 
        usuariosPost, 
        usuariosPatch, 
        usuariosDelete, 
        usuariosPut } = require('../controllers/usuarios')
const { esRolValido, emailExiste, existeUsuarioPorId } = require('../helpers/db-validators')
const { validarCampos } = require('../middlewares/validar-campos')

const router=Router()

router.get('/', usuariosGet)
router.post('/', [
        check('nombre', 'El Nombre es obligatorio').not().isEmpty(),
        check('password', 'La contraseña debe tener minimo 6 caracteres').isLength({ min: 6 }),
        check('correo', 'El Correo no es valido').isEmail(),
        // check('rol', 'No es un rol existente').isIn(['ADMIN_ROLE', "USER_ROLE"]),
        check('correo').custom( emailExiste ),
        check('rol').custom( esRolValido ),
        validarCampos

], usuariosPost)
router.patch('/', usuariosPatch)
router.delete('/:id',[
        check('id', 'No es un ID valido de Mongo').isMongoId(),
        check('id').custom( existeUsuarioPorId ),
        validarCampos
],
 usuariosDelete)
router.put('/:id', [
        check('id', 'No es un ID valido de Mongo'). isMongoId(),
        check('id').custom( existeUsuarioPorId ),
        check('rol').custom( esRolValido ),
        validarCampos
],usuariosPut)

module.exports=router