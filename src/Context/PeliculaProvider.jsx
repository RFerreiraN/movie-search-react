import { useState } from 'react';
import { PeliculaContext } from './PeliculaContext'


export const PeliculaProvider = ({ children }) => {

  const [busqueda, setBusqueda] = useState('');
  const [peliculas, setPeliculas] = useState([]);
  const [favoritas, setFavoritas] = useState([]);
  const eliminarFav = (id) => {
    setFavoritas(previus => previus.filter(pelicula => pelicula.id !==id))
  }

  return (
    <PeliculaContext.Provider value={{busqueda, setBusqueda, peliculas, setPeliculas, favoritas, setFavoritas, eliminarFav }}>
      {children}
    </PeliculaContext.Provider>
  )
}
