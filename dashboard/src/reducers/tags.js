// Action types
import { SET_LOADING, REMOVE_LOADING, GET_TAGS_MORE_USED_IN_ARTICLES } from '../actions/types'

// Initial state
const INITIAL_STATE = {
  tags: {
    tagsMoreUsedInArticles: [],
  },
  loading: false,
}

/**
 * Tags Reducer
 *
 * @param {object} state
 * @param {object} action
 */
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_TAGS_MORE_USED_IN_ARTICLES:
      return {
        ...state,
        tags: {
          ...state.tags,
          tagsMoreUsedInArticles: payload
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
