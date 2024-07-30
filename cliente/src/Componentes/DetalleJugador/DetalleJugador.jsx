import axios from "axios";

const DetalleJugador = ({ listaJugadores, setListaJugadores }) => {


  const actualizarEstado = async (id, nuevoEstado) => {
    try {
      const url = `http://localhost:8080/actualizar/estado/jugador/${id}`;
      await axios.put(url, { estado: nuevoEstado }); //Aqui estoy actualizando el servidor, enviando el nuevo estado

      const jugadoresActualizados = listaJugadores.map(jugador =>
        jugador._id === id ? { ...jugador, estado: nuevoEstado } : jugador /*comparo el _id del jugador el la listaJugadores con el id del jugadorActualizado
        si coincide se reemplaza su objeto con uno nuevo que incluye el nuevoEstado. Si no hay coincidencia, el jugador se mantiene igual.*/
      );
      setListaJugadores(jugadoresActualizados);

    } catch (error) {
      console.error("Error actualizando el estado del jugador:", error);
    }
  };


  return (
    <>
      <h2>Detalle jugador</h2>
      <table className="tabla-jugadores">
        <thead>
          <tr>
            <th>Jugadores</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {listaJugadores.map((jugador, index) => (
            <tr key={index}>
              <td> {jugador.nombre} </td>
              <td>
                <button
                  onClick={() => actualizarEstado(jugador._id, "Juega")}
                  style={{ backgroundColor: jugador.estado === "Juega" ? "green" : "" }}
                >
                  Juega
                </button>
                <button
                  onClick={() => actualizarEstado(jugador._id, "No juega")}
                  style={{ backgroundColor: jugador.estado === "No juega" ? "red" : "" }}
                >
                  No juega
                </button>
                <button
                  onClick={() => actualizarEstado(jugador._id, "Indeciso")}
                  style={{ backgroundColor: jugador.estado === "Indeciso" ? "yellow" : "" }}
                >
                  Indeciso
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table >
    </>
  )
};

export default DetalleJugador;