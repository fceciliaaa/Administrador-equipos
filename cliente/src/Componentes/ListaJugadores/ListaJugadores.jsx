import axios from "axios";
import { Link } from "react-router-dom";

const ListaJugadores = ({ listaJugadores, eliminarJugadorDeLista }) => {

  const eliminarJugador = async (id) => {
    const url = `http://localhost:8080/eliminar/jugador/${id}`
    await axios.delete(url);

    eliminarJugadorDeLista(id)
  }

  return (
    <>

      <h2>Lista de jugadores </h2>
      <table className="tabla-jugadores">
        <thead>
          <tr>
            <th>Jugadores</th>
            <th>Posicion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {listaJugadores.map((jugador, index) => (
            <tr key={index}>
              <td>{jugador.nombre} </td>
              <td>{jugador.posicion}</td>
              <td>
                <button className="btn-eliminar" onClick={() => eliminarJugador(jugador._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table >
    </>
  )
}

export default ListaJugadores;