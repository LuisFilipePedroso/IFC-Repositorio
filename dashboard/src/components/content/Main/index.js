// React & Redux
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getAllCourses } from '../../../actions/courses'

// Components
import Footer from '../../layout/Footer'
import Spinner from '../../layout/Spinner'

// Others
import CanvasJSReact from '../../../assets/js/canvasjs.react'

// Main
const Main = () => {
  // Canvas Charts
  const CanvasJSChart = CanvasJSReact.CanvasJSChart

  // Local state
  const [graphsData, setGraphsData] = useState({})

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
    setGraphsData({
      graph01: {
        theme: "dark1",
        animationEnabled: true,
        data: [
          {
            type: "bar",
            dataPoints: [
              { label: "Apple",  y: 10 },
              { label: "Orange", y: 15 },
              { label: "Banana", y: 25 },
              { label: "Mango",  y: 30 },
              { label: "Grape",  y: 28 }
            ]
          }
        ]
      },
      graph02: {
        theme: "light1",
        animationEnabled: true,
        data: [
          {
            type: "column",
            dataPoints: [
              { label: "Apple",  y: 10 },
              { label: "Orange", y: 15 },
              { label: "Banana", y: 25 }
            ]
          }
        ]
      },
    })
  }, [courses])

  return (
    <div className="container-fluid mt--7">
      <div className="row">
        <div className="col-xl-8 mb-5 mb-xl-0">
          <div className="card bg-dark-graph shadow">
            <div className="card-header bg-transparent">
              <div className="row align-items-center">
                <div className="col mb-3">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    Visão Geral
                  </h6>
                  <h2 className="text-white mb-0">Cursos Recentes</h2>
                </div>
                <div className="col-12 m-0 p-0">
                  {loading || alert.length > 0 ? (
                    <Spinner loading={loading} size={92} />
                  ) : (
                    <CanvasJSChart options={graphsData.graph01} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card shadow">
            <div className="card-header bg-transparent">
              <div className="row align-items-center">
                <div className="col">
                  <h2 className="mb-0">Tags Recentes</h2>
                </div>
              </div>
            </div>
            <div className="card-body">
              {loading || alert.length > 0 ? (
                <Spinner loading={loading} size={92} />
              ) : (
                <CanvasJSChart options={graphsData.graph02} />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
