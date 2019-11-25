// Action types
import { SET_LOADING, REMOVE_LOADING, GET_USERS_WITH_MORE_PUBLISHED, GET_USERS_MORE_VISUALIZED } from '../actions/types'

// Initial state
const INITIAL_STATE = {
  users: {
    // Users Page
    usersWithMorePublished: [],
    usersMoreVisualized: [],
  },
  loading: false,
}

// Reducer
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_USERS_WITH_MORE_PUBLISHED:
      return {
        ...state,
        users: {
          ...state.users,
          usersWithMorePublished: payload
        },
        loading: false
      }

    case GET_USERS_MORE_VISUALIZED:
      return {
        ...state,
        users: {
          ...state.users,
          usersMoreVisualized: payload
        },
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
