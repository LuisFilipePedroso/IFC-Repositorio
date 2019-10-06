// React & Redux
import React from 'react'
import PropTypes from 'prop-types'

// Components
import Header from '../Header'
import Sidebar from '../Sidebar'
import Main from '../content/Main'

// Styles
import { DashboardWrapper, ContentWrapper } from './style'

// Dashboard
const Dashboard = () => {
  return (
    <div class="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <Header />
        <div class="container-fluid">
          <Main />
        </div>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
