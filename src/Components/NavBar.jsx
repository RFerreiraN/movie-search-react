
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to={'/buscador'}  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} >Buscador</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/about'}  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>¿Quienes Somos?</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={'/favoritas'}  className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Favoritas</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
