// React & Redux
import React from 'react'
import { Link } from 'react-router-dom'

// Others
// import boxLogo from '../../../static/img/brand/box.png'

// Sidebar
const Sidebar = () => {
  return (
    <nav className="navbar navbar-vertical fixed-left navbar-expand-md navbar-light bg-white" id="sidenav-main">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#sidenav-collapse-main" aria-controls="sidenav-main" aria-expanded="false" aria-label="Toggle navigation">
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
                    alt="IF Box"
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
          {/* <form className="mt-4 mb-3 d-md-none">
            <div className="input-group input-group-rounded input-group-merge">
              <input type="search" className="form-control form-control-rounded form-control-prepended" placeholder="Search" aria-label="Search" />
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <span className="fa fa-search"></span>
                </div>
              </div>
            </div>
          </form> */}
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className=" nav-link active " href="#">
                <i className="ni ni-tv-2 text-primary"></i> Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                <i className="ni ni-planet text-blue"></i> Cursos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                <i className="ni ni-pin-3 text-orange"></i> Artigos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                <i className="ni ni-single-02 text-yellow"></i> Tags
              </a>
            </li>
          </ul>
          <hr className="my-3"/>
          <h6 className="navbar-heading text-muted">Documentação</h6>
          <ul className="navbar-nav mb-md-3">
            <li className="nav-item">
              <a className="nav-link" href="https://github.com/LuisFilipePedroso/IFC-Repositorio">
                <i className="ni ni-spaceship"></i> Github
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
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
