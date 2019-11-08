// React
import React from 'react'

// Footer
export const Footer = () => (
  <footer className="footer">
    <div
      className="row align-items-center justify-content-xl-between">
      <div className="col-xl-6">
        <div className="copyright text-center text-xl-left text-muted">
          &copy; {new Date().getFullYear()}
          <a
            href="http://www.ifc-riodosul.edu.br/site/"
            className="ml-1"
            target="_blank"
          >
            - IFC Rio do Sul
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
