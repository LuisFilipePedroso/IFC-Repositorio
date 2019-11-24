// Imports
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Reducers
import courses from './reducers/courses'
import alert from './reducers/alert'
import articles from './reducers/articles'
import search from './reducers/search'

// State
const INITIAL_STATE = {}

// Middlewares
const middlewares = [thunk]

// Store
const store = createStore(
	combineReducers({
    courses,
    alert,
    articles,
    search,
	}),
  INITIAL_STATE,
  process.env.NODE_ENV === 'development'
    ? composeWithDevTools(applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares)
)

export default store
