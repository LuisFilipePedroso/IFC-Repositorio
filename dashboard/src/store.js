// Imports
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Reducers
import courses from './reducers/courses'

// State
const initialState = {}

// Middlewares
const middlewares = [thunk]

// Store
const store = createStore(
	combineReducers({
		courses
	}),
	initialState,
	composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
