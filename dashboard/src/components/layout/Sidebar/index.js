// React & Redux
import React from 'react'
import { Link } from 'react-router-dom'

// Others
// import boxLogo from '../../../assets/img/brand/box.png'

// Sidebar
const Sidebar = () => {
  return (
    <nav
      className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white"
      id="sidenav-main"
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#sidenav-collapse-main"
          aria-controls="sidenav-main"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand pt-0" href="#">
          <img
            src="#"
            alt="IF Box"
          />
        </a>
        <div className="collapse navbar-collapse" id="sidenav-collapse-main">
          <div className="navbar-collapse-header d-md-none">
            <div className="row">
              <div className="col-6 collapse-brand">
                <a href="#">
                  <img
                    src="#"
                    alt="Logo IFBox "
                  />
                </a>
              </div>
              <div className="col-6 collapse-close">
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#sidenav-collapse-main"
                  aria-controls="sidenav-main"
                  aria-expanded="false"
                  aria-label="Toggle sidenav"
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link active" to="/">
                <i className="ni ni-tv-2 text-primary"></i> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/cursos">
                <i className="ni ni-planet text-blue"></i> Cursos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/artigos">
                <i className="ni ni-pin-3 text-orange"></i> Artigos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/tags">
                <i className="ni ni-single-02 text-yellow"></i> Tags
              </Link>
            </li>
          </ul>
          <hr className="my-3" />
          <h6 className="navbar-heading text-muted">Documentação</h6>
          <ul className="navbar-nav mb-md-3">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/LuisFilipePedroso/IFC-Repositorio"
                target="_blank"
              >
                <i className="ni ni-spaceship"></i> Github
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                target="_blank"
              >
                <i className="ni ni-palette"></i> Site
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
