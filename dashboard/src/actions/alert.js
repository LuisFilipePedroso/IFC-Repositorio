// Action types
import { SET_ALERT, REMOVE_ALERT, REMOVE_ALERTS } from './types'

// Others
import { uniqueId } from 'lodash'

/**
 * Set alert
 *
 * @param {string} message
 * @param {string} type
 * @param {number} timeout
 */
export const setAlert = (message, type, timeout) => dispatch => {
  const id = uniqueId('id-')
  dispatch({
    type: SET_ALERT,
    payload: {
      id,
      message,
      type
    }
  })
  if (timeout) {
    setTimeout(() => (
      dispatch({
        type: REMOVE_ALERT,
        payload: id
      })
    ), timeout)
  }
}

/**
 * Remove alerts
 */
export const removeAlerts = () => dispatch => {
  dispatch({ type: REMOVE_ALERTS })
}
