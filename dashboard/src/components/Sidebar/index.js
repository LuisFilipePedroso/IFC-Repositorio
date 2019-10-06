// React & Redux
import React from 'react'
import PropTypes from 'prop-types'

// Styles
import { SibebarWrapper } from './style'

// Sidebar
const Sidebar = () => {
  return (
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Dashboard logo aqui</div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">Início</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Artigos</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Cursos</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Anos</a>
        <a href="#" class="list-group-item list-group-item-action bg-light">Cadastro</a>
      </div>
    </div>
  )
}

Sidebar.propTypes = {}

export default Sidebar
