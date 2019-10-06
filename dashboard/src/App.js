// React & Redux
import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

// Styles
import { Container } from 'reactstrap'
import GlobalStyle from './style/global'

// Components
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

// App
const App = () => {
	return (
		<Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      <GlobalStyle />
		</Router>
	)
}

export default App
