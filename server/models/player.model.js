const mongoose = require('mongoose');

const coleccionJugadores = mongoose.Schema({
  nombre: {
    type: String, 
    required: [true, 'El campo nombre es requerido'],
    minlength: [3, 'Debe contener al menos 3 caracteres']
  },
  posicion:{
    type: String, 
    required: [true, 'El campo nombre es requerido'],
    minlength: [3, 'Debe contener al menos 3 caracteres']
  },
  estado:{
    type: String,
  }
}, { timestamps: true });

const Jugadores = mongoose.model('jugadores', coleccionJugadores)

module.exports = Jugadores; 