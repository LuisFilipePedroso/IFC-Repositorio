// Action types
import { SET_LOADING, REMOVE_LOADING, GET_COURSES_WITH_MORE_VIEWS, GET_COURSES_PUBLISHED_BY_YEAR, GET_COURSE_WITH_MORE_VIEWS } from '../actions/types'

// Initial state
const INITIAL_STATE = {
  courses: {
    // Dashboard page
    courseWithMoreViews: '',
    // Courses Page
    coursesWithMoreViews: [],
    coursesPublishedByYear: [],
  },
  loading: false,
}

/**
 * Courses reducer
 *
 * @param {object} state
 * @param {object} action
 */
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_COURSES_WITH_MORE_VIEWS:
      return {
        ...state,
        courses: {
          ...state.courses,
          coursesWithMoreViews: payload
        },
        loading: false
      }

    case GET_COURSES_PUBLISHED_BY_YEAR:
      return {
        ...state,
        courses: {
          ...state.courses,
          coursesPublishedByYear: payload
        },
        loading: false
      }

    case GET_COURSE_WITH_MORE_VIEWS:
      return {
        ...state,
        courses: {
          ...state.courses,
          courseWithMoreViews: payload
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
