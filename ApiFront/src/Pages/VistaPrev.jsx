import { useContext } from "react";
import { MusicContext } from "../context/MusicContext";
import "../styles/VistaPrev.css"
import FormAdd from "../components/FormAdd";
import NavBar from "../components/NavBar";

export const VistaPrev = () => {
    const { musics, isLoading, error } = useContext(MusicContext);

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
        <header>
            <NavBar />
        </header>
        
        <h2>Artistas y bandas</h2>
  <div className="artists">
    {musics.length ? (
      <div className="card-container">
        {musics.map((m) => (
          <div className="card" key={m.id}>
            <div className="card-header">
              <h2>{m.artist}</h2>
              <img src={m.poster} alt={m.artist} />
            </div>
            <div className="card-body">
              <p><strong>Género:</strong> {m.genres}</p>
              <p><strong>Origen:</strong> {m.origin}</p>
              <p><strong>Inicio:</strong> {m.start}</p>
              <p><strong>Cantidad de Canciones:</strong> {m.songs}</p>
              <p><strong>Cantidad de Miembros:</strong> {m.members}</p>
            </div>
          </div>
        ))}
           <div className="add">
           <button className="button" onClick={FormAdd}>+</button>
         </div>
      </div>
    ) : (
      <p>No hay datos para mostrar.</p>
    )}
  </div>
</>
    )
}