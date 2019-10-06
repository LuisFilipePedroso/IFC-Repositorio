// React & Redux
import React from 'react'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

// Styles
import { Container } from 'reactstrap'

// Components
import Login from './components/Login'

// App
const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Container>
					<Route exact path="/" component={Login} />
				</Container>
			</Router>
		</Provider>
	)
}

export default App
