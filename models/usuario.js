const { Schema, model} =require('mongoose')


const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre del Usuario es Obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo del Usuario es Obligatorio'], 
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña del Usuario es Obligatoria']
    },
    img: {
        type: String,
    },
    rol: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE', 'USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: String,
        default: false
    },
})

UsuarioSchema.methods.toJSON= function() {
    const { __v, password, ...usuario } = this.toObject()
    return usuario
}
module.exports = model( 'Usuario', UsuarioSchema )
