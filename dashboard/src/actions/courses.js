// Action types
import { SET_LOADING, REMOVE_LOADING, GET_COURSES_WITH_MORE_VIEWS, GET_COURSES_PUBLISHED_BY_YEAR, GET_COURSE_WITH_MORE_VIEWS } from './types'

// Actions
import { setAlert } from '../actions/alert'

// Others
import api from '../services/api'
import { countBy, forIn } from 'lodash'

/**
 * Courses with more views
 */
export const getCoursesWithMoreViews = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/charts/courses/views')

    let coursesWithMoreViews = []
    forIn(res.data, value => {
      if (value.name.length > 15) {
        value.name = `${value.name.substr(0, 15)}...`
      }

      coursesWithMoreViews = [...coursesWithMoreViews, {
        label: value.name,
        y: Number(value.qty)
      }]
    })

    dispatch({
      type: GET_COURSES_WITH_MORE_VIEWS,
      payload: coursesWithMoreViews
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}

/**
 * Courses published by year
 */
export const getCoursesPublishedByYear = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/charts/courses/years')

    const years = res.data.map(course => course.year)
    const occurences = countBy(years)

    let coursesPublishedByYear = []
    forIn(occurences, (value, key) => {
      coursesPublishedByYear = [...coursesPublishedByYear, {
        label: key,
        y: value
      }]
    })

    dispatch({
      type: GET_COURSES_PUBLISHED_BY_YEAR,
      payload: coursesPublishedByYear
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}

/**
 * Course with more views
 */
export const getCourseWithMoreViews = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/charts/courses/views')

    const course = res.data[0].name

    dispatch({
      type: GET_COURSE_WITH_MORE_VIEWS,
      payload: course
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}
