// Action types
import { GET_COURSES, SET_LOADING, REMOVE_LOADING } from '../actions/types'

// Initial state
const INITIAL_STATE = {
  courses: null,
  loading: false
}

// Reducer
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_COURSES:
      return {
        ...state,
        courses: payload,
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
