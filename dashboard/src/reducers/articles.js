// Action types
import { SET_LOADING, REMOVE_LOADING, GET_ARTICLES_WITH_MORE_DOWNLOADS, GET_ARTICLES_WITH_MORE_VIEWS, GET_ARTICLES_PUBLISHED_BY_YEAR, GET_ARTICLES_AND_DOWNLOADS, GET_ARTICLES_AND_VIEWS } from '../actions/types'

// Initial state
const INITIAL_STATE = {
  articles: {
    // Dashboard Page
    articlesPublishedByYear: [],
    articlesAndDownloads: [],
    articlesAndViews: [],
    // Articles Page
    articlesWithMoreViews: [],
    articlesWithMoreDownloads: [],
  },
  loading: false,
}

// Reducer
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_ARTICLES_PUBLISHED_BY_YEAR:
      return {
        ...state,
        articles: {
          ...state.articles,
          articlesPublishedByYear: payload,
        },
        loading: false
      }

    case GET_ARTICLES_AND_DOWNLOADS:
      return {
        ...state,
        articles: {
          ...state.articles,
          articlesAndDownloads: payload,
        },
        loading: false
      }

    case GET_ARTICLES_AND_VIEWS:
      return {
        ...state,
        articles: {
          ...state.articles,
          articlesAndViews: payload,
        },
        loading: false
      }

    case GET_ARTICLES_WITH_MORE_VIEWS:
      return {
        ...state,
        articles: {
          ...state.articles,
          articlesWithMoreViews: payload,
        },
        loading: false
      }

    case GET_ARTICLES_WITH_MORE_DOWNLOADS:
      return {
        ...state,
        articles: {
          ...state.articles,
          articlesWithMoreDownloads: payload,
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
