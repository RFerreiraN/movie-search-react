import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

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
    <div className='container d flex '>
      <div className="card" style={{width: "12rem"}}>
        <img src={`${urlImage}${pelicula.poster_path}`} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
      </div>
    </div>
  )
}
