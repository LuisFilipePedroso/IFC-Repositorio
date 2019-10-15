// React & Redux
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getAllCourses } from '../../../actions/courses'

// Components
import Spinner from '../../Spinner'

// Others
import Chart from 'react-apexcharts'

// Courses
const Courses = () => {
  // Dispatch
  const dispatch = useDispatch()

  // Component mount
  useEffect(() => { dispatch(getAllCourses()) }, [])

  // Courses state
  const courses = useSelector(state => state.courses.courses)
  const loading = useSelector(state => state.courses.loading)

  // Local states
  const [graphConfigs, setGraphConfigs] = useState({
    options: {
      chart: {
        id: 'all-courses-graph'
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    },
    series: [{
      name: 'nomes',
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }]
  })

  if (loading) {
    return  <Spinner loading={loading} />
  } else {
    return (
      <>
        <div class="col-xl-8 mb-5 mb-xl-0">
          <div class="card bg-gradient-default shadow">
            <div class="card-header bg-transparent"></div>
            <div class="card-body">
              <Chart
                options={graphConfigs.options}
                series={graphConfigs.series}
                type="bar"
                width="100%"
                height={320}
              />
            </div>
          </div>
        </div>

      </>
    )
  }
}



export default Courses
