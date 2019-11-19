// React & Redux
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

// Styles
import { BrandImage, NavbarMenu } from './style'

// Others
import boxLogo from '../../../assets/img/iFBox_purple.png'

// Sidebar
const Sidebar = () => {
  return (
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
        <Link className="navbar-brand pt-0" to="/dashboard">
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
                  <span className="bg-primary"></span>
                  <span className="bg-primary"></span>
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
                <i className="ni ni-app text-primary"></i> Dashboard
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
                <i className="ni ni-single-02 text-success"></i> Usuários
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link toggle-submenu"
                data-toggle="collapse"
                href="#tagsSubMenu"
                role="button"
                aria-expanded="false"
                aria-controls="tagsSubMenu"
              >
                <i className="ni ni-tag text-yellow"></i> Tags
              </a>
            </li>
            <div className="collapse multi-collapse my-0 mx-auto" id="tagsSubMenu">
              <ul className="navbar-nav mf-4">
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/tags/web"
                  >
                    <i className="ni ni-html5 text-primary"></i> Web
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/tags/framework"
                  >
                    <i className="ni ni-planet text-primary"></i> Framework
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    activeClassName="active"
                    className="nav-link"
                    to="/tags/bigdata"
                  >
                    <i className="ni ni-chart-pie-35 text-primary"></i> Bigdata
                  </NavLink>
                </li>
              </ul>
            </div>
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
}

export default Sidebar
