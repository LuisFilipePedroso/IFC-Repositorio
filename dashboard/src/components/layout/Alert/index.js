// React & Redux
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

// Actions
import { removeAlerts } from '../../../actions/alert'

// Alert
const Alert = () => {
  // Dispatch
  const dispatch = useDispatch()

  // History
  const history = useHistory()

  // Alert state
  const alerts = useSelector(state => state.alert)

  // Handle alerts cleanup
  history.listen(() => dispatch(removeAlerts()))

  return (
    alerts !== null && alerts.length > 0 && alerts.map(alert => (
      <div
        key={alert.id}
        className={`alert alert-${alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <h2 className="h2 text-white m-0">{alert.message}</h2>
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    ))
  )
}

export default Alert
