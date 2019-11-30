// Action types
import {
  SET_LOADING,
  REMOVE_LOADING,
  GET_USERS_WITH_MORE_PUBLISHED,
  GET_USERS_MORE_VISUALIZED,
  GET_USER_WITH_MORE_PUBLISHED
} from './types'

// Actions
import { setAlert } from '../actions/alert'

// Others
import api from '../services/api'
import { forIn } from 'lodash'

/**
 * Users with more published
 */
export const getUsersWithMorePublished = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/charts/users')

    let usersWithMorePublished = []
    forIn(res.data, value => {
      const name = `${value.firstname} ${value.lastname}`.length > 15
        ? `${value.firstname} ${value.lastname}`.substr(0, 15) + '...'
        : `${value.firstname} ${value.lastname}`

      usersWithMorePublished = [...usersWithMorePublished, {
        label: name,
        y: Number(value.qty)
      }]
    })

    dispatch({
      type: GET_USERS_WITH_MORE_PUBLISHED,
      payload: usersWithMorePublished
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}

/**
 * Users more visualized
 */
export const getUsersMoreVisualized = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/charts/users/views')

    let usersMoreVisualized = []
    forIn(res.data, value => {
      const name = `${value.firstname} ${value.lastname}`.length > 15
        ? `${value.firstname} ${value.lastname}`.substr(0, 15) + '...'
        : `${value.firstname} ${value.lastname}`

      usersMoreVisualized = [...usersMoreVisualized, {
        label: name,
        y: value.views
      }]
    })

    dispatch({
      type: GET_USERS_MORE_VISUALIZED,
      payload: usersMoreVisualized
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}

/**
 * User with more published
 */
export const getUserWithMorePublished = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/charts/users')

    const name = `${res.data[0].firstname} ${res.data[0].lastname}`.length > 15
      ? `${res.data[0].firstname} ${res.data[0].lastname}`.substr(0, 15) + '...'
      : `${res.data[0].firstname} ${res.data[0].lastname}`

    dispatch({
      type: GET_USER_WITH_MORE_PUBLISHED,
      payload: name
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}
