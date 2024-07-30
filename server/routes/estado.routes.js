const express = require('express');
const estadoController = require('../controllers/estado.controller');
const routerEstados = express.Router();

routerEstados.post('/nuevo/estado', estadoController.agregarEstado);
routerEstados.get('/estados', estadoController.todosLosEstados);
routerEstados.delete('/eliminar/estado/:id', estadoController.eliminarEstado);


module.exports = routerEstados;