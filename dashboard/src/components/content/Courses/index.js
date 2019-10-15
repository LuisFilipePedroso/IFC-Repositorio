// React & Redux
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getAllCourses } from '../../../actions/courses'

// Styles

// Courses
const Courses = () => {
  // Dispatch
  const dispatch = useDispatch()

  // Component mount
  useEffect(() => {
    dispatch(getAllCourses())
  }, [dispatch])

  // Courses state
  const courses = useSelector(state => state.courses)

  return (
    <>
      {console.log(courses)}
      {typeof courses}
      {/* {courses.map(course => <h2>{course.name}</h2>)} */}
    </>
  )
}

export default Courses
