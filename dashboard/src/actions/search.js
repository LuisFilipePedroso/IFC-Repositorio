// Action types
import { SET_LOADING, REMOVE_LOADING, GET_ARTICLES_SEARCH, GET_COURSES_SEARCH, GET_USERS_SEARCH, NO_RESULTS } from './types'

// Actions
import { setAlert } from '../actions/alert'

// Others
import { api } from '../config/api'

// Busca artigos
export const getArticlesSearch = content => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    // const res = api.get('/')
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}

// Busca cursos
export const getCoursesSearch = content => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    // dispatch({ type: NO_RESULTS })
    dispatch({
      type: GET_COURSES_SEARCH,
      payload: content
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}

// Busca usuarios
export const getUsersSearch = content => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}
