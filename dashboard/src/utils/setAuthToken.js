// Imports
import { api } from '../config/api'

// Set request token
export default token => {
	if (token) {
		api.defaults.headers.common['auth-token'] = token
	} else {
		delete api.defaults.headers.common['auth-token']
	}
}
