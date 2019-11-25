// React & Redux
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// Styles
import { BrandImage, NavbarMenu } from './style'

// Others
import boxLogo from '../../../assets/img/logo-ifbox.png'

// Sidebar
const Sidebar = () => (
  <nav
    className="navbar navbar-vertical navbar-light fixed-left navbar-expand-md bg-white"
    id="sidenav-main"
  >
    <div className="container-fluid">
      <button
        className="navbar-toggler custom-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#mobile-menu"
        aria-controls="sidenav-main"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <Link className="navbar-brand p-0 m-0 mt-2" to="/dashboard">
        <BrandImage src={boxLogo} alt="IFC - Rio do Sul" />
      </Link>
      <div className="collapse navbar-collapse" id="mobile-menu">
        <div className="navbar-collapse-header d-md-none">
          <div className="row">
            <div className="col-6 collapse-brand">
              <Link to="/dashboard">
                <img
                  src={boxLogo}
                  alt="Logo IFBox"
                />
              </Link>
            </div>
            <div className="col-6 collapse-close">
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#mobile-menu"
                aria-controls="mobile-menu"
                aria-expanded="false"
                aria-label="Toggle sidenav"
              >
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
        <NavbarMenu className="navbar-nav">
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/dashboard"
            >
              <i className="ni ni-app text-success"></i> Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/cursos"
            >
              <i className="ni ni-book-bookmark text-orange"></i> Cursos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/artigos"
            >
              <i className="ni ni-align-center text-info"></i> Artigos
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeClassName="active"
              className="nav-link"
              to="/usuarios"
            >
              <i className="ni ni-single-02 text-yellow"></i> Usuários
            </NavLink>
          </li>
        </NavbarMenu>
        <hr className="my-3" />
        <h6 className="navbar-heading text-muted">Links Úteis</h6>
        <ul className="navbar-nav mb-md-3">
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://github.com/LuisFilipePedroso/IFC-Repositorio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github-alt"></i> Github
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-file"></i> Site
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Sidebar
