// Action types
import { SET_ALERT, REMOVE_ALERT } from './types'

// Others
import uuid from 'uuid'

/**
 * Set alert
 *
 * @param {string} message
 * @param {string} type
 * @param {number} timeout
 */
export const setAlert = (message, type, timeout) => dispatch => {
  const id = uuid.v4()
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
