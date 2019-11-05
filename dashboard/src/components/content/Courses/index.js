// React & Redux
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getAllCourses } from '../../../actions/courses'

// Components
import Spinner from '../../layout/Spinner'
import Chart from 'react-apexcharts'


// Courses
const Courses = () => {
  // Local state
  const [graphData, setGraphData] = useState({
    options: {
      chart: {
        id: ''
      },
      xaxis: {
        categories: []
      }
    },
    series: [
      {
        name: '',
        data: []
      }
    ]
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
    const names = courses.map(course => course.name)
    const ids = courses.map(course => course.id)
    setGraphData({
      options: {
        chart: {
          id: 'cursos'
        },
        xaxis: {
          categories: names
        }
      },
      series: [
        {
          name: 'ids',
          data: ids
        }
      ]
    })
  }, [courses])

  if (loading || alert.length > 0) {
    return <Spinner loading={loading} />
  } else {
    return (
      <>
        <Chart
          options={graphData.options}
          series={graphData.series}
          type="bar"
          width="80%"
          height={400}
        />
      </>
    )
  }
}

export default Courses
