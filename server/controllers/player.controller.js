const Jugadores = require('../models/player.model');

//Añadir nuevo jugador 
module.exports.crearJugador = (req, res)=> {
    Jugadores.create(req.body)
    .then((nuevoAutor) => {
      return res.status(201).json(nuevoAutor);
    })
    .catch((error) => {
      res.statusMessage = error;
      return res.status(400).json(error);
  });
};

//Ver todos los jugadores
module.exports.todosLosJugadores = (req, res) => {
  Jugadores.find()
  .then((listaJugadores) => {
    return res.status(200).json(listaJugadores);
  })
  .catch((error) => {
    return res.status(400).json(error);
  });
};

//Actualizar jugador
module.exports.modificarJugador =(req,res) => {
  const actualizarJugador = {};
  const {nombre, posicion, estado} = req.body;
  
  if (nombre){
    actualizarJugador.nombre = nombre;
  }

  if (posicion){
    actualizarJugador.posicion = posicion;
  }

  if (estado){
    actualizarJugador.estado = estado;
  }

  Jugadores.findByIdAndUpdate ({_id: req.params.id}, actualizarJugador, {new: true})
  .then((nuevoJugador)=>{
    return res.status(200).json(nuevoJugador)
  })
  .catch((error) => {
    res.statusMessage = error.message;
    return res.status(400).json(error.message);
  });
};

//Eliminar jugador
module.exports.eliminarJugador = (req, res) => {
  Jugadores.findOneAndDelete({_id: req.params.id})
    .then(() => {
      return res.status(200).end();
    })
    .catch((error) => {
        return res.status(400).json(error);
    });
};

//Actualizar estado 
module.exports.agregarEstado = (req, res) => {
  const { estado } = req.body;

  Jugadores.findOneAndUpdate({_id: req.params.id}, {estado}, {new: true})
        .then((estadoActualizado) => {
          return res.status(200).json(estadoActualizado);
        })
  
  .catch((error) => {
    res.statusMessage = error.message;
    return res.status(400).json(error.message);
  });
};
