import { useContext } from 'react'
import { PeliculaContext } from '../Context/PeliculaContext'


export const Favoritas = () => {

  const { favoritas } = useContext(PeliculaContext)

  return (
    <>
        <table className="table table-info">
          <thead>
            <tr>
              <th scope="col">Pelicula</th>
              <th scope="col">Año de estreno</th>
              <th scope="col">Web Site</th>
              <th scope="col"></th>
            </tr>
          </thead>
          {favoritas.map(item => (
            <tbody key={item.id}>
              <tr >
                <th scope="row">{item.original_title}</th>
                <td>{item.release_date}</td>
                <td>
                   <a href={`https://www.themoviedb.org/movie/${item.id}`} target="_blank" rel="noopener noreferrer">Web</a>
                </td>
                <td>
                  <button>Eliminar</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
    </>
  )
}
