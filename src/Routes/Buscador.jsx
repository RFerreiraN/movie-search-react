import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

let apiKey = '755ce7a7d4fe1b26cff21b7995d49852';
let urlApi = 'https://api.themoviedb.org/3/search/movie';
let urlImage = 'https://image.tmdb.org/t/p/w200';

export const Buscador = () => {
  const [busqueda, setBusqueda] = useState('');
  const [peliculas, setPeliculas] = useState([]);

  const handleInput = ({ target }) => {
    setBusqueda(target.value)
  };

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (busqueda.trim().length === 0) {
      alert('Debes introducir un nombre de pelicula')
      return
    } 
    fetchPeliculas()
    setBusqueda("")
  };

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(`${urlApi}?api_key=${apiKey}&query=${busqueda}`)
      const data = await response.json()
      if(data.results.length === 0){
        alert('No se encontraron peliculas que coincidan con esa búsqueda')
      }
      setPeliculas(data.results)
      
    } catch (error) {
      console.error('Ha ocurrido el siguiente error: ', error)
    } 
  }

  const resetBusqueda = () =>{
    setBusqueda("")
    setPeliculas([])
  }

  return (
    <div className="container mb-5">
      <div className="d-flex justify-content-center mb-4">
        <form className="w-100 w-md-50" onSubmit={onSubmitForm}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              name="busqueda"
              placeholder="Introduce Nombre de Pelicula"
              value={busqueda}
              onChange={handleInput}
            />
            <button type="submit" className="btn btn-primary me-2">Buscar</button>
            <button type="button" className="btn btn-primary" onClick={resetBusqueda}>Limpiar</button>
          </div>
        </form>
      </div>

 
      <div className="row g-3">
        {peliculas.map(item => (
          <div className="col-6 col-md-4 col-lg-3" key={item.id}>
            <div className="card h-100 d-flex flex-column">
              <img
                src={`${urlImage}${item.poster_path}`}
                className="card-img-top"
                alt={item.original_title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-truncate" title={item.original_title}>
                  {item.original_title}
                </h5>
                <p className="card-text flex-grow-1 overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis"
                  }}>{item.overview}                 
                </p>
                <Link to={`/detalles/${item.id}`} className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover mt-auto">+ Detalles</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  )
}
