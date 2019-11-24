// Action types
import { SET_LOADING, REMOVE_LOADING, GET_USERS_WITH_MORE_PUBLISHED } from './types'

// Actions
import { setAlert } from '../actions/alert'

// Others
import api from '../services/api'
import { countBy, forIn } from 'lodash'

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
