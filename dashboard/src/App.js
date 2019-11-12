// React & Redux
import React from 'react'
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// Styles
import GlobalStyle from './style/global'
import { DashboardWrapper } from './style/dashboard'

// Components
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Main from './components/content/Main'
import Courses from './components/content/Courses'

// App
const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <DashboardWrapper>
          <Sidebar />
          <div className="main-content">
            <Header />
            <Route exact path="/" render={() => <Redirect to="/dashboard"/>}/>
            <Route exact path="/dashboard" component={Main} />
            <Route exact path="/cursos" component={Courses} />
          </div>
        </DashboardWrapper>
      </Switch>
      <GlobalStyle />
    </Router>
  </Provider>
)

export default App
