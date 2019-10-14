// Action types
import { GET_COURSES } from '../actions/types'

// Initial state
const INITIAL_STATE = {}

// Reducer
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_COURSES:
      return payload

    default:
      return state
  }

}
