// React & Redux
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getAllCourses } from '../../../actions/courses'

// Components
import Spinner from '../../layout/Spinner'
import Chart from 'react-apexcharts'

// Main
const Main = () => {
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
        },
        colors:['#fff']
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
      <div class="container-fluid mt--7">
        <div class="row">
          <div class="col-xl-8 mb-5 mb-xl-0">
            <div class="card bg-gradient-default shadow">
              <div class="card-header bg-transparent">
                <div class="row align-items-center">
                  <div class="col">
                    <h6 class="text-uppercase text-light ls-1 mb-1">Visão Geral</h6>
                    <h2 class="text-white mb-0">Cursos</h2>
                  </div>
                  <div class="col-12 m-0 p-0">
                    <Chart
                      options={graphData.options}
                      series={graphData.series}
                      type="bar"
                      width="100%"
                      // height={400}
                      align="center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-4">
            <div class="card shadow">
              <div class="card-header bg-transparent">
                <div class="row align-items-center">
                  <div class="col">
                    <h6 class="text-uppercase text-muted ls-1 mb-1">Performance</h6>
                    <h2 class="mb-0">Total orders</h2>
                  </div>
                </div>
              </div>
              <div class="card-body">
                <div class="chart"><div class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div></div>
                  <canvas id="chart-orders" class="chart-canvas chartjs-render-monitor" /*style={{display: 'block', width: '271px', height: '350px', width="271", height="350"}}*/></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer class="footer">
          <div class="row align-items-center justify-content-xl-between">
            <div class="col-xl-6">
              <div class="copyright text-center text-xl-left text-muted">
                &copy; 2019 <a href="#" class="ml-1" target="_blank">IFC - Rio do Sul</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Main
