import { useState } from 'react';
import { PeliculaContext } from './PeliculaContext'


export const PeliculaProvider = ({ children }) => {

  const [busqueda, setBusqueda] = useState('');
  const [peliculas, setPeliculas] = useState([]);

  return (
    <PeliculaContext.Provider value={{busqueda, setBusqueda, peliculas, setPeliculas}}>
      {children}
    </PeliculaContext.Provider>
  )
}
