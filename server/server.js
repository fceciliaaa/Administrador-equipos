const express = require('express');
const app = express();
const cors = require('cors');
const routerJugadores = require('./routes/player.routes')
const routerEstados = require ('./routes/estado.routes')

require('./config/mongoose.config')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', routerJugadores);
app.use('/estados', routerEstados);

app.listen(8080, () => {
  console.log('El servidor ya está encendido en el puerto 8080.');
}); 