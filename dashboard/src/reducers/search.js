// Action types
import { SET_LOADING, REMOVE_LOADING, GET_USERS_SEARCH, GET_ARTICLES_SEARCH, GET_COURSES_SEARCH, NO_RESULTS, UPDATE_CHART_TITLES } from '../actions/types'

// Initial state
const INITIAL_STATE = {
  results: [],
  chartTitles: [],
  loading: false,
}

/**
 * Search Reducer
 *
 * @param {object} state
 * @param {object} action
 */
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_USERS_SEARCH:
      return {
        ...state,
        results: payload,
        loading: false
      }

    case GET_ARTICLES_SEARCH:
      return {
        ...state,
        results: payload,
        loading: false
      }

    case GET_COURSES_SEARCH:
      return {
        ...state,
        results: payload,
        loading: false
      }

    case UPDATE_CHART_TITLES:
      return {
        ...state,
        chartTitles: payload,
        loading: false
      }

    case NO_RESULTS:
      return {
        ...state,
        results: [],
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
