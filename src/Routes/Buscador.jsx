import { useState } from 'react';


export const Buscador = () => {
  const [busqueda, setBusqueda] = useState('');

  const handleInput = ({ target }) => {
    setBusqueda(target.value)
  };
  const onSubmitForm = (e) => {
    e.preventDefault()
    if (busqueda.length === 0) return
    console.log(busqueda)
    setBusqueda("")
  };
  
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
    </div>
  )
}
