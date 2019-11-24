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
import NotFound from './components/pages/NotFound'
import Main from './components/content/Main'
import Courses from './components/content/Courses'
import Search from './components/content/Search'
import Articles from './components/content/Articles'
import Users from './components/content/Users'

// App
const App = () => (
  <Provider store={store}>
    <Router>
      <DashboardWrapper>
        <Sidebar />
        <div className="main-content">
          <Header />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/dashboard" />}/>
            <Route exact path="/dashboard" component={Main} />
            <Route exact path="/cursos" component={Courses} />
            <Route exact path="/artigos" component={Articles} />
            <Route exact path="/usuarios" component={Users} />
            <Route exact path={`/dashboard/busca/:page/:search`} component={Search} />
            <Route path="" component={NotFound} />
          </Switch>
        </div>
      </DashboardWrapper>
      <GlobalStyle />
    </Router>
  </Provider>
)

export default App
