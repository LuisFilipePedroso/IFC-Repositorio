// React & Redux
import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// Styles
import { ListGroup, NavbarBrand } from 'reactstrap'
import { SibebarWrapper } from './style'

// Sidebar
const Sidebar = () => {
  return (
    <SibebarWrapper className="border-right-lg bg-white shadow">
      <div className="sidebar-heading pb-4">
        <NavbarBrand>ifbox</NavbarBrand>
      </div>
      <ListGroup className="list-group-flush bg-dark">
        <Link
          to="/dashboard"
          className="list-group-item list-group-item-action border-0"
        >
          Início
        </Link>
        <Link
          to="/dashboard/artigos"
          className="list-group-item list-group-item-action border-0"
        >
          Artigos
        </Link>
        <Link
          to="/dashboard/"
          className="list-group-item list-group-item-action border-0"
        >
          Cursos
        </Link>
        <Link
          to="/dashboard/"
          className="list-group-item list-group-item-action border-0"
        >
          Anos
        </Link>
        <Link
          to="/dashboard/"
          className="list-group-item list-group-item-action border-0"
        >
          Cadastro
        </Link>
      </ListGroup>
    </SibebarWrapper>
  )
}

Sidebar.propTypes = {}

export default Sidebar
