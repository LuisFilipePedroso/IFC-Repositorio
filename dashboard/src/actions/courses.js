// Action types
import { SET_LOADING, REMOVE_LOADING } from './types'

// Actions
import { setAlert } from '../actions/alert'

// Others
import api from '../services/api'

// Get all courses
export const getAllCourses = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/charts/courses/views')
    dispatch({
      type: '123',
      payload: res.data.courses
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}
