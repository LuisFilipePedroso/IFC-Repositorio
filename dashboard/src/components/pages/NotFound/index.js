// React
import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Footer from '../../layout/Footer'

// NotFound
export const NotFound = () => (
  <>
    <div className="container-fluid mt--7 position-relative">
      <div className="jumbotron py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="error-template">
                <h1>Oops!</h1>
                <h2>Erro 404</h2>
                <div className="error-details">
                  Não foram encontrados resultados para essa pesquisa
                </div>
                <div className="error-actions mt-3">
                  <Link
                    to="/dashboard"
                    className="btn btn-primary btn-lg"
                  >
                    <span className="glyphicon glyphicon-home"></span>
                    Dashboard Home
                  </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </>
)

export default NotFound
