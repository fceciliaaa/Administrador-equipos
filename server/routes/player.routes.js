const express = require('express');
const jugadorController = require('../controllers/player.controller');
const routerJugadores = express.Router();

routerJugadores.post('/nuevo/jugador', jugadorController.crearJugador);
routerJugadores.get('/lista/jugadores', jugadorController.todosLosJugadores);
routerJugadores.put('/actualizar/jugador/:id', jugadorController.modificarJugador);
routerJugadores.delete('/eliminar/jugador/:id', jugadorController.eliminarJugador);
routerJugadores.put('/actualizar/estado/jugador/:id', jugadorController.agregarEstado);


module.exports = routerJugadores;