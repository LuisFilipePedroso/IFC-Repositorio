// React & Redux
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

// Components
import Alert from '../Alert'

// Styles
import { SearchForm } from './style'

// Header
const Header = () => {
  // History
  const history = useHistory().location.pathname

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
          {
            !history.includes('/busca') &&
            !history.includes('/dashboard') && (
            <SearchForm
              className="navbar-search navbar-search-dark form-inline d-none d-md-flex ml-lg-auto"
              action={`/dashboard/busca${history}/${searchContent}`}
              method="GET"
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
                    placeholder={`Buscar ${history.replace('/', '')}...`}
                    type="text"
                    onChange={event => handleInputChange(event)}
                  />
                </div>
              </div>
            </SearchForm>
          )}
        </div>
      </nav>
      <div className="header bg-gradient-primary pb-8 pt-5 pt-md-8">
        <div className="container-fluid">
          <Alert />
        </div>
      </div>
    </>
  )
}

export default Header
