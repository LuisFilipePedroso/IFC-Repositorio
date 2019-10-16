// React & Redux
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getAllCourses } from '../../../actions/courses'

// Components
import Spinner from '../../layout/Spinner'

// Courses
const Courses = () => {
  // Dispatch
  const dispatch = useDispatch()

  // Component mount
  useEffect(() => { dispatch(getAllCourses()) }, [])

  // Courses state
  const courses = useSelector(state => state.courses.courses)
  const loading = useSelector(state => state.courses.loading)
  const alert = useSelector(state => state.alert)

  if (loading || alert.length > 0) {
    return <Spinner loading={loading} />
  } else {
    return (
      <>
        Courses
      </>
    )
  }
}

export default Courses
