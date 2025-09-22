import React from 'react'

export const Logo = () => {
  return (
    <div >
      <div className='container-logo d-flex align-items-center justify-content-start px-5'>
        <img src='src/assets/fondo-cine.png' alt='logo' width={"180"} height={"150"} />
        <div className="ms-4 d-flex flex-column">
          <h1>Movie<span>Search</span></h1>
          <p className="mb-0">Pasión por el cine</p>
        </div>
      </div>
    </div>
  )
}
