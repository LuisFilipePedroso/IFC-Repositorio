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
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Main from './components/content/Main'
import Courses from './components/content/Courses'

// App
const App = () => {
	return (
    <Provider store={store}>
      <Router>
        <Switch>
          <DashboardWrapper>
            <Sidebar />
            <ContentWrapper>
              <Header />
              <Container className="container-fluid p-3">
                <Route exact path="/dashboard" component={Main} />
                <Route exact path="/dashboard/courses" component={Courses} />
              </Container>
            </ContentWrapper>
          </DashboardWrapper>
        </Switch>
        <GlobalStyle />
      </Router>
    </Provider>
	)
}

export default App
