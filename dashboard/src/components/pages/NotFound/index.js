// React
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Components
import Footer from '../../layout/Footer'

// NotFound
const NotFound = ({ returnPage = 'dashboard' }) => (
  <div className="container-fluid mt--7 position-relative">
    <div className="jumbotron shadow py-5">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h2 className="m-0">Oops!</h2>
            <h1 className="display-1">Erro 404</h1>
            <div className="error-detail font-weight-bold">
              Não foram encontrados resultados para essa pesquisa
            </div>
            <div className="error-actions mt-3">
              <Link
                to={`/${returnPage}`}
                className="btn btn-primary btn-lg"
              >
                <span className="glyphicon glyphicon-home"></span>
                Retornar para {returnPage}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

// Props
NotFound.propTypes = { returnPage: PropTypes.string }

export default NotFound
