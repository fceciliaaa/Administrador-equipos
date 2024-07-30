import { useState } from "react";
import axios from "axios";

const FormJugador = ({ actualizarJugadorDeLaLista }) => {

  const [nombre, setNombre] = useState("");
  const [posicion, setPosicion] = useState("");
  const [estado, setEstado] = useState("Indeciso")

  const [error, setError] = useState({});


  const agregarALista = async (e) => {
    e.preventDefault();
    try {
      const nuevoJugador = { nombre, posicion, estado };
      const url = 'http://localhost:8080/nuevo/jugador'
      const respuesta = await axios.post(url, nuevoJugador);


      actualizarJugadorDeLaLista(respuesta.data);
      setNombre("");
      setPosicion("");

      setError({})

    } catch (error) {
      console.log(error.response.data.errors);
      setError(error.response.data.errors);
    }
  }

  return (
    <>
      <h2>Añadir jugador</h2>

      <form onSubmit={agregarALista}>

        <div className="inputs">
          <label > Nombre </label>
          <input type="text" value={nombre} onChange={e => setNombre(e.target.value)} />
          {
            error.nombre ? <p style={{ color: 'red' }}>{error.nombre.message}</p> : ''
          }
        </div><br />

        <div className="inputs">
          <label> Posicion </label>
          <input type="text" value={posicion} onChange={e => setPosicion(e.target.value)} />
          {
            error.posicion ? <p style={{ color: 'red' }}>{error.posicion.message}</p> : ''
          }
        </div><br />

        <button type='submit' className="btn-crear" > Crear </button>
      </form>

    </>
  )
};

export default FormJugador;