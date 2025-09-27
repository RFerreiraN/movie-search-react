import { useContext } from 'react'
import { PeliculaContext } from '../Context/PeliculaContext'


export const Favoritas = () => {

  const { favoritas, eliminarFav } = useContext(PeliculaContext)
 
  return (
    <>
      <div className="container mt-5">
        <table className="table table-info">
          <thead>
            <tr>
              <td scope="col" className='columnasFavs'>Pelicula</td>
              <td scope="col" className='columnasFavs'>Año de estreno</td>
              <td scope="col" className='columnasFavs'>Web Site</td>
              <td scope="col" className='columnasFavs'></td>
            </tr>
          </thead>
          {favoritas.map(item => (
            <tbody key={item.id}>
              <tr >
                <td scope="row" className='inputsFavs'>{item.original_title}</td>
                <td className='inputsFavs'>{item.release_date}</td>
                <td>
                  <a href={`https://www.themoviedb.org/movie/${item.id}`} target="_blank" rel="noopener noreferrer">Web</a>
                </td>
                <td>
                  <button onClick={() => eliminarFav(item.id)}>Eliminar</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>

    </>
  )
}
