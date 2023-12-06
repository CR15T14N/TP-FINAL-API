import React, { useContext } from "react";
import { MusicContext } from "../context/MusicContext";
import "../styles/Music.css";
import { BsTrash } from "react-icons/bs";
import { FaEdit } from 'react-icons/fa';


const Music = () => {
  const { musics, isLoading, error, deleteOne, updateMusic } = useContext(MusicContext);

  if (isLoading) {
    return (
      <div>
        <h2>Cargando...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h2>{error}</h2>
      </div>
    );
  }


  return (
    <>

    <div className="artists">
      {musics.length ? (
        <table>
          <thead>
            <tr>
              <th>Artista</th>
              <th>Género</th>
              <th>Origen</th>
              <th>Inicio</th>
              <th>Cantidad de Canciones</th>
              <th>Cantidad de Miembros</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {musics.map((m) => (
              <tr key={m.id}>
                <td>{m.artist}</td>
                <td>{m.genres}</td>
                <td>{m.origin}</td>
                <td>{m.start}</td>
                <td>{m.songs}</td>
                <td>{m.members}</td>
                <td key={`actions-${m.id}`}>
      <BsTrash
        color="tomato"
        size={18}
        onClick={() => deleteOne(m.id)}
      />
      <FaEdit 
        color="light-blue"
        size={18}
        onClick={() => updateMusic(m.id)}
      />
    </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No hay datos para mostrar.</p>
        )}
    </div>
        </>
  );
};
export default Music;

