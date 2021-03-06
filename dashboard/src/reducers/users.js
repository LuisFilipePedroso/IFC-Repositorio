// Action types
import {
  SET_LOADING,
  REMOVE_LOADING,
  GET_USER_WITH_MORE_PUBLISHED,
  GET_USERS_WITH_MORE_PUBLISHED,
  GET_USERS_MORE_VISUALIZED
} from '../actions/types'

// Initial state
const INITIAL_STATE = {
  users: {
    // Dashboard Page
    userWithMorePublished: '',
    // Users Page
    usersWithMorePublished: [],
    usersMoreVisualized: [],
  },
  loading: false,
}

/**
 * Users reducer
 *
 * @param {object} state
 * @param {object} action
 */
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

    case GET_USER_WITH_MORE_PUBLISHED:
      return {
        ...state,
        users: {
          ...state.users,
          userWithMorePublished: payload
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
