// React & Redux
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getAllCourses } from '../../../actions/courses'

// Styles

// Courses
const Courses = () => {
  const courses = useSelector(state => state.courses)

  // Dispatch
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllCourses)
  }, [])

  return (
    <>
      <h1>Courses</h1>
    </>
  )
}

Courses.propTypes = {}

export default Courses
