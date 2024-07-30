
import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import { Routes, Route, Link } from 'react-router-dom';
import ListaJugadores from '../ListaJugadores/ListaJugadores';
import DetalleJugador from '../DetalleJugador/DetalleJugador';
import FormJugador from '../FormJugador/FormJugador';

const App = () => {
  const [listaJugadores, setListaJugadores] = useState([]);

  useEffect(() => {
    const obtenerListaJugadores = async () => {
      const url = 'http://localhost:8080/lista/jugadores'
      const respuesta = await axios.get(url)
      setListaJugadores(respuesta.data)
    }
    obtenerListaJugadores();

  }, []);

  const eliminarJugadorDeLista = (id) => {
    const listaTemporal = listaJugadores.filter(jugador => jugador._id !== id);
    setListaJugadores(listaTemporal);
  }

  const actualizarJugadorDeLaLista = (nuevoJugador) => {
    setListaJugadores([...listaJugadores, nuevoJugador])
  }

  return (
    <>
      <Link to='/'> Administrador de jugadores | </Link>
      <Link to='/detalle/jugador '> Estado jugadores </Link>
      <div className='sub-cont'>
        <Link to='/lista'>Lista jugadores | </Link>
        <Link to='/crear/jugador'> Añadir nuevo jugador</Link>
      </div>

      <Routes>
        <Route path='/' element={
          <>
            <ListaJugadores listaJugadores={listaJugadores} eliminarJugadorDeLista={eliminarJugadorDeLista} />
          </>
        }
        />
        <Route path='/detalle/jugador' element={<DetalleJugador listaJugadores={listaJugadores} setListaJugadores={setListaJugadores} />} />
        <Route path='/crear/jugador' element={<FormJugador actualizarJugadorDeLaLista={actualizarJugadorDeLaLista} />} />
        <Route path='/lista' element={<ListaJugadores listaJugadores={listaJugadores} eliminarJugadorDeLista={eliminarJugadorDeLista} />} />
      </Routes>
    </>
  )
}
export default App;
