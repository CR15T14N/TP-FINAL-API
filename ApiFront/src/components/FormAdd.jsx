import React, { useState, useContext } from 'react';
import { MusicContext } from '../context/MusicContext';
import { v4 as uuidv4 } from 'uuid';
import "../styles/FormAdd.css";

const FormAdd = () => {
  const { addOne } = useContext(MusicContext);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [newMusic, setNewMusic] = useState({
    id: uuidv4(),
    artist: '',
    genres: '', 
    origin: '',
    start: '',
    songs: 0,
    members: '',
    poster: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewMusic((prevMusic) => ({
      ...prevMusic,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newMusic);
    try {
      // Llamada a la función de agregar música
      await addOne(newMusic);

      // Restablece el formulario
      setNewMusic({
        id: uuidv4(),
        artist: '',
        genres: '',
        origin: '',
        start: '',
        songs: 0,
        members: '',
        poster: '',
      });
      
      // Oculta el formulario
      setIsFormVisible(false);
    } catch (error) {
      console.error('Error al agregar música:', error.message);
    }
  };

  const handleToggleForm = () => {
    setIsFormVisible((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleToggleForm}>
        {isFormVisible ? 'Cerrar Formulario' : 'Abrir Formulario'}
      </button>
      {isFormVisible && (
        <form method='POST' onSubmit={handleSubmit} encType='multipart/form-data'>
          <label>
            Artista:
            <input type="text" name="artist" value={newMusic.artist} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Géneros (separados por comas):
            <input type="text" name="genres" value={newMusic.genres} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Origen:
            <input type="text" name="origin" value={newMusic.origin} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Inicio (Año):
            <input type="number" name="start" value={newMusic.start} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Cantidad de canciones:
            <input type="number" name="songs" value={newMusic.songs} onChange={handleChange} required />
          </label>
          <br />
          <label>
            Nombres de los miembros:
            <input type="text" name="members" value={newMusic.members} onChange={handleChange} required />
          </label>
          <br />
          <label>
            URL de la imagen:
            <input type="text" name="poster" value={newMusic.poster} onChange={handleChange} />
          </label>
          <button type="submit">Agregar Música</button>
        </form>
      )}
    </div>
  );
};

export default FormAdd;

