// Action types
import { SET_ALERT, REMOVE_ALERT } from '../actions/types'

// Initial state
const INITIAL_STATE = []

/**
 * Alerts reducer
 *
 * @param {object} state
 * @param {object} action
 */
export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_ALERT:
      return [
        ...state,
        payload
      ]

    case REMOVE_ALERT:
      return state.filter(alert => alert.id !== payload)

    default:
      return state
  }
}
