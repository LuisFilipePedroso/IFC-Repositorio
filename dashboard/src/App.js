// React & Redux
import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// Styles
import { Container } from 'reactstrap'
import GlobalStyle from './style/global'
import { ContentWrapper, DashboardWrapper } from './style/dashboard'

// Components
import Sidebar from './components/layout/Sidebar'
import Header from './components/layout/Header'
import Alert from './components/layout/Alert'
import Main from './components/content/Main'
import Courses from './components/content/Courses'

// App
const App = () => (
  <Provider store={store}>
    <Router>
      <Switch>
        <DashboardWrapper>
          <Sidebar />
          <ContentWrapper>
            <Header />
            <Container className="container-fluid p-3">
              <Alert />
              <Route exact path="/" component={Main} />
              <Route exact path="/cursos" component={Courses} />
            </Container>
          </ContentWrapper>
        </DashboardWrapper>
      </Switch>
      <GlobalStyle />
    </Router>
  </Provider>
)

export default App
