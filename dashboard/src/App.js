// React & Redux
import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

// Styles
import { Container } from 'reactstrap'
import GlobalStyle from './style/global'
import { ContentWrapper, DashboardWrapper } from './style/dashboard'

// Components
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Main from './components/content/Main'
import Artigos from './components/content/Artigos'

// App
const App = () => {
	return (
		<Router>
      <Switch>
        <DashboardWrapper>
          <Sidebar />
          <ContentWrapper>
            <Header />
            <Container className="container-fluid p-3">
              <Route exact path="/dashboard/" component={Main} />
              <Route exact path="/dashboard/artigos" component={Artigos} />
            </Container>
          </ContentWrapper>
        </DashboardWrapper>
      </Switch>
      <GlobalStyle />
		</Router>
	)
}

export default App
