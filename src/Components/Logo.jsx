import logoImg from '../assets/fondo-cine.png'; 

export const Logo = () => {
  return (
    <div className="w-100">
      <div className="container-logo d-flex flex-wrap align-items-center justify-content-center justify-content-md-start text-center text-md-start">
        <img 
          src={logoImg} 
          alt="logo" 
          width="180" 
          height="150" 
          className="mb-2 mb-md-0"
        />
        <div className="ms-md-4 d-flex flex-column">
          <h1 className="fs-2 fs-md-1">
            Movie<span>Search</span>
          </h1>
          <p className="mb-0">Pasión por el cine</p>
        </div>
      </div>
    </div>
  )
}
