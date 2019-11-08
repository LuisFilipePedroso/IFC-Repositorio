// React & Redux
import React from 'react'
import { Link } from 'react-router-dom'

// Others
// import boxLogo from '../../../assets/img/brand/box.png'

// Sidebar
const Sidebar = () => {
  return (
    <nav
      className="navbar navbar-vertical fixed-left navbar-expand-md bg-white"
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
                  <span className="bg-primary"></span>
                  <span className="bg-primary"></span>
                </button>
              </div>
            </div>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link active" to="/">
                <i className="ni ni-app text-primary"></i> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cursos">
                <i className="ni ni-book-bookmark text-orange"></i> Cursos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/artigos">
                <i className="ni ni-align-center text-blue"></i> Artigos
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-toggle="collapse"
                href="#tagsSubMenu"
                role="button"
                aria-expanded="false"
                aria-controls="tagsSubMenu"
              >
                <i className="ni ni-tag text-yellow"></i> Tags
              </a>
            </li>
            <div class="collapse multi-collapse my-0 mx-auto" id="tagsSubMenu">
              <ul className="navbar-nav mf-4">
                <li className="nav-item">
                  <Link className="nav-link" to="/tags/web">
                    <i className="ni ni-html5 text-primary"></i> Web
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tags/framework">
                    <i className="ni ni-planet text-primary"></i> Framework
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tags/bigdata">
                    <i className="ni ni-chart-pie-35 text-primary"></i> Bigdata
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
          <hr className="my-3" />
          <h6 className="navbar-heading text-muted">Links Úteis</h6>
          <ul className="navbar-nav mb-md-3">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/LuisFilipePedroso/IFC-Repositorio"
                target="_blank"
              >
                <i class="fab fa-github-alt"></i> Github
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                target="_blank"
              >
                <i class="fas fa-file"></i> Site
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
