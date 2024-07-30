const{ Estados } = require('../models/estado.model')

module.exports.agregarEstado = (req, res) => {
    Estados.create(req.body)
      .then((nuevoEstado) => {
        return res.status(201).json(nuevoEstado);
      })
      .catch((error) => {
        res.statusMessage = error.message;
        return res.status(400).json(error.message);
      });
};

module.exports.todosLosEstados = (req, res) => {
    Estados.find()
        .then((listaEstados) => {
            return res.status(200).json(listaEstados);
        })
        .catch((error) => {
            return res.status(400).json(error);
        });
};

module.exports.eliminarEstado = (req, res) => {
    Estados.findOneAndDelete({_id: req.params.id})
      .then(() => {
        return res.status(200).end();
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  };