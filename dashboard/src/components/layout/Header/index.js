// React & Redux
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Components
import Alert from '../Alert'

// Styles
import { SearchForm } from './style'

// Header
const Header = () => {
  // Local state
  const [searchContent, setSearchContent] = useState('')

  // Input handle
  const handleInputChange = event => setSearchContent(event.target.value)

  return (
    <>
      <nav
        className="navbar navbar-top navbar-expand-md navbar-dark"
        id="navbar-main"
      >
        <div className="container-fluid">
          <Link
            className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block"
            to="/"
          >
            Dashboard
          </Link>
          <SearchForm
            className="navbar-search navbar-search-dark form-inline d-none d-md-flex ml-lg-auto"
            action={`/dashboard/busca/artigos/${searchContent}`}
          >
            <div className="form-group mb-0">
              <div className="input-group input-group-alternative">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-search"></i>
                  </span>
                </div>
                <input
                  className="form-control"
                  placeholder="Buscar artigos..."
                  type="text"
                  onChange={event => handleInputChange(event)}
                />
              </div>
            </div>
          </SearchForm>
        </div>
      </nav>
      <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
        <div className="container-fluid">
          <Alert />
        </div>
        <div className="container-fluid">
          <div className="header-body">
            <div className="row">
              <div className="col-xl-3 col-lg-6">
                <div className="card card-stats mb-4 mb-xl-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">Traffic</h5>
                        <span className="h2 font-weight-bold mb-0">350,897</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2"><i className="fa fa-arrow-up"></i> 3.48%</span>
                      <span className="text-nowrap">Since last month</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="card card-stats mb-4 mb-xl-0">
                  <div className="card-body">
                    <div className="row">
                      <div className="col">
                        <h5 className="card-title text-uppercase text-muted mb-0">New users</h5>
                        <span className="h2 font-weight-bold mb-0">2,356</span>
                      </div>
                      <div className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie"></i>
                        </div>
                      </div>
                    </div>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2"><i className="fas fa-arrow-down"></i> 3.48%</span>
                      <span className="text-nowrap">Since last week</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
