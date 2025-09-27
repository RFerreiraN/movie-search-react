import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { PeliculaContext } from '../Context/PeliculaContext';

let apiKey = '755ce7a7d4fe1b26cff21b7995d49852';
let urlApi = 'https://api.themoviedb.org/3/movie';
let urlImage = 'https://image.tmdb.org/t/p/w200';



export const Detalles = () => {

  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null)
  const navigate = useNavigate();
  const { favoritas, setFavoritas } = useContext(PeliculaContext)

  const fetchDetalle = async () => {
    const response = await fetch(`${urlApi}/${id}?api_key=${apiKey}`);
    const data = await response.json()
    setPelicula(data)
  }

  const volverBusqueda = () => {
    navigate(-1)
  }

  const irFavoritas = () => {
    // setFavoritas(previus => [...previus, pelicula])
    setFavoritas( prev => {
      const peliExiste = prev.some(p => p.id === pelicula.id)
      if(peliExiste){
        alert('La película ya fue agregada a Favoritas')
        return prev
      }
      return [...prev, pelicula]
    })
  }
 

  useEffect(() => {
    fetchDetalle()
  }, [id])

  if (!pelicula) return <p>Cargando...</p>

  return (

    <div className="container-detail">
      <div className='card-detail'>
        <img src={`${urlImage}${pelicula.poster_path}`} alt="..." />
        <p className="card-title"><span>{pelicula.overview}</span></p>
        <p className="card-text" ><span>Fecha de estreno : {pelicula.release_date}</span></p>
        <p className="card-text" ><span>Puntuación : {pelicula.vote_average}/10</span></p>
        <div className="d-flex justify-content-center gap-3 mt-3">
          <a className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mt-auto" style={{ fontSize: "15px" }} onClick={irFavoritas}>Añadir a Favoritas</a>
          <a className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mt-auto" style={{ fontSize: "15px" }} onClick={volverBusqueda}>Volver</a>
        </div>
      </div>
    </div>
  )
}
