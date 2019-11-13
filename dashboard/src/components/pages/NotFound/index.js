// React
import React from 'react'
import { Link } from 'react-router-dom'

// Components
import Footer from '../../layout/Footer'

// NotFound
export const NotFound = () => (
  <>
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
                  to="/dashboard"
                  className="btn btn-primary btn-lg"
                >
                  <span className="glyphicon glyphicon-home"></span>
                  Retornar para Home
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
