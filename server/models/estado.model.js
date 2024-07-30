const mongoose = require('mongoose');

const ColeccionEstado = mongoose.Schema({
    estado: {
        type: String,
        required: [true, 'Por favor proporciona el nombre del curso'],
        minLength: [3, 'Por favor proporciona un nombre real.']
    }, 
    clave: {
        type: String
    }
},
{timestamps: true});

const Estados = mongoose.model('estados', ColeccionEstado);

module.exports = {
    Estados,
    ColeccionEstado
}