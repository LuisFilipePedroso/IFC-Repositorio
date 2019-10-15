// Action types
import { GET_COURSES, SET_LOADING } from './types'

// Others
import { api } from '../config/api'

// Get all courses
export const getAllCourses = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/courses')
    dispatch({
      type: GET_COURSES,
      payload: res.data.courses
    })
  } catch (err) {
    console.log('error catch' + err)
  }
}
