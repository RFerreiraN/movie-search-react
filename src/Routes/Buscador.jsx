import { useState } from 'react';

let apiKey = '755ce7a7d4fe1b26cff21b7995d49852';
let urlApi = 'https://api.themoviedb.org/3/search/movie';
let urlImage = 'https://image.tmdb.org/t/p/w200';

export const Buscador = () => {
  const [busqueda, setBusqueda] = useState('');
  const [peliculas, setPeliculas] = useState([])

  const handleInput = ({ target }) => {
    setBusqueda(target.value)
  };

  const onSubmitForm = (e) => {
    e.preventDefault()
    if (busqueda.length === 0) return
    console.log(busqueda)
    fetchPeliculas()
    setBusqueda("")
  };

  const fetchPeliculas = async () => {
    try {
      const response = await fetch(`${urlApi}?api_key=${apiKey}&query=${busqueda}`)
      const data = await response.json()
      setPeliculas(data.results)
      console.log(data)
    } catch (error) {
      console.error('Ha ocurrido el siguiente error: ', error)
    }
  }


  return (
    <div className='container mb-3'>
      <form className='container-buscador d-flex' onSubmit={onSubmitForm}>
        <div>
          <input
            type="text"
            className="form-control"
            name="busqueda"
            placeholder='Introduce Pelicula'
            value={busqueda}
            onChange={handleInput}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <div className="container mt-4">
        <div className="row g-3">
          {peliculas.map(item => (
            <div className="col-6 col-md-4 col-lg-3" key={item.id}>
              <div className="card h-100">
                <img
                  src={`${urlImage}${item.poster_path}`}
                  className="card-img-top"
                  alt="pelicula-imagen"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.original_title}</h5>
                  <p className="card-text flex-grow-1 overflow-hidden"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: "vertical",
                      textOverflow: "ellipsis"
                    }}> {item.overview}
                    </p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div >
  )
}
