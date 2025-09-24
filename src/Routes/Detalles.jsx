import { useEffect, useState } from 'react'
import { href, useParams } from 'react-router-dom';

let apiKey = '755ce7a7d4fe1b26cff21b7995d49852';
let urlApi = 'https://api.themoviedb.org/3/movie';
let urlImage = 'https://image.tmdb.org/t/p/w200';


export const Detalles = () => {

  const { id } = useParams();
  const [pelicula, setPelicula] = useState(null)

  const fetchDetalle = async () => {
    const response = await fetch(`${urlApi}/${id}?api_key=${apiKey}`);
    const data = await response.json()
    setPelicula(data)
    console.log(data)
  }

  useEffect(() => {
    fetchDetalle()
  }, [id])

  if (!pelicula) return <p>Cargando...</p>

  return (
    <div className='container d flex mt-5'>
      <div className="card" style={{width: "300px", height: "auto"}}>
        <img src={`${urlImage}${pelicula.poster_path}`} className="card-img-top" alt="..."/>
          <div className="card-body">
            <p className="card-title" style={{fontSize : "18px"}}><span>{pelicula.overview}</span></p>
            <p className="card-text" style={{fontSize : "13px"}}><span>Fecha de estreno : {pelicula.release_date}</span></p>
            <p className="card-text" style={{fontSize : "13px"}}><span>Puntuación : {pelicula.vote_average}/10</span></p>
            <a href="#" className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mt-auto" style={{fontSize : "15px"}}>Añadir a Favoritas</a>
            <a href="#" className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mt-auto" style={{fontSize : "15px"}}>Volver</a>
          </div>
      </div>
    </div>
  )
}
