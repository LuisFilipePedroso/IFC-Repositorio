// React & Redux
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getAllCourses } from '../../../actions/courses'

// Components
import Spinner from '../../layout/Spinner'
// import Chart from 'react-apexcharts'

// Courses
const Courses = () => {
  // Local state
  const [graphData, setGraphData] = useState({
  })

  // Global states
  const courses = useSelector(state => state.courses.courses)
  const loading = useSelector(state => state.courses.loading)
  const alert = useSelector(state => state.alert)

  // Dispatch
  const dispatch = useDispatch()

  // Component mount
  useEffect(() => {
    dispatch(getAllCourses())
  }, [])

  // Courses update
  useEffect(() => {
    setGraphData({

    })
  }, [courses])

    return (
      <>

      </>
    )
}

export default Courses
