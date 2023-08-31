
import './navBar.css'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container">
      <a className="navbar-brand" href="#">Logo</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Acerca</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Servicios</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}

export default NavBar