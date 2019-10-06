// Action types
import {} from '../actions/_types'

// Initial state
const INITIAL_STATE = {
	token: localStorage.getItem('auth-token'),
	authenticated: false,
	loading: true,
	user: null
}

// Reducer
export default (state = INITIAL_STATE, action) => {
}
