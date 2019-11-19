// Action types
import { SET_LOADING, REMOVE_LOADING, GET_USERS_SEARCH, GET_ARTICLES_SEARCH, GET_COURSES_SEARCH, NO_RESULTS } from '../actions/types'

// Initial state
const INITIAL_STATE = {
  result: [],
  loading: false,
}

// Reducer
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_USERS_SEARCH:
      return {
        ...state,
        result: payload,
        loading: false
      }

    case GET_ARTICLES_SEARCH:
      return {
        ...state,
        result: payload,
        loading: false
      }

    case GET_COURSES_SEARCH:
      return {
        ...state,
        result: payload,
        loading: false
      }

    case NO_RESULTS:
      return {
        ...state,
        result: [],
        loading: false
      }

    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case REMOVE_LOADING:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }

}
