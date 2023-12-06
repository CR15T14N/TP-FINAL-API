// MusicContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { fetchAllMusic, addOneMusic, deleOneMusic } from '../services/allMusicServices';

export const MusicContext = createContext();

const MusicContextProvider = ({ children }) => {
  const [musics, setMusics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAllMusic();
        console.log('Data from API:', data);

        setMusics(data);
        setIsLoading(false);
      } catch (error) {
        setError('Error al cargar datos');
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Funciones CRUD

  const addOne = async (newMusic) => {
    try {
      const addedMusic = await addOneMusic(newMusic);
      setMusics([...musics, addedMusic]);
    } catch (error) {
      console.error('Error al agregar música:', error.message);
      throw error; // Puedes decidir si deseas lanzar el error nuevamente o manejarlo de otra manera
    }
  };

  const updateOne = async (updatedMusic) => {
    try {
      const updated = await updateMusic(updatedMusic);
      const updatedMusics = musics.map((music) =>
        music.id === updated.id ? updated : music
      );
      setMusics(updatedMusics);
    } catch (error) {
      console.error('Error al actualizar música:', error.message);
    }
  };

  const deleteOne = async (musicId) => {
    try {
      await deleOneMusic(musicId);
      const updatedMusics = musics.filter((music) => music.id !== musicId);
      setMusics(updatedMusics);
    } catch (error) {
      console.error('Error al eliminar música:', error.message);
    }
  };

  return (
    <MusicContext.Provider value={{ musics, isLoading, error, addOne, updateOne, deleteOne }}>
      {children}
    </MusicContext.Provider>
  );
};

export default MusicContextProvider;
