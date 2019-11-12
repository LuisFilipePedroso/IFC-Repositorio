// React & Redux
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getArticlesPublishedByYear, getArticlesWithMoreDownloads } from '../../../actions/articles'

// Components
import Footer from '../../layout/Footer'
import Spinner from '../../layout/Spinner'

// Chart configs
import CanvasJSReact from '../../../assets/js/canvasjs.react'
CanvasJSReact.CanvasJS.addColorSet('argon-default', [
  "#ffd600",
  "#11cdef",
  "#5e72e4",
  "#f5365c",
  "#2dce89",
  "#fb6340",
])

// Main
const Main = () => {
  // Chart component
  const Chart = CanvasJSReact.CanvasJSChart

  // Local state
  const [graphsData, setGraphsData] = useState({})

  // Global states
  const articlesPublishedByYear = useSelector(state => state.articles.articles.articlesPublishedByYear)
  const articlesWithMoreDownloads = useSelector(state => state.articles.articles.articlesWithMoreDownloads)
  const loading = useSelector(state => state.articles.loading)
  const alert = useSelector(state => state.alert)

  // Dispatch
  const dispatch = useDispatch()

  // Component mount
  useEffect(() => {
    dispatch(getArticlesPublishedByYear())
    dispatch(getArticlesWithMoreDownloads())
  }, [dispatch])

  // Courses update
  useEffect(() => {
    setGraphsData({
      graph01: {
        theme: "dark1",
        colorSet: "argon-default",
        backgroundColor: "#172b4d",
        animationEnabled: true,
        data: [
          {
            type: "spline",
            dataPoints: articlesPublishedByYear
          }
        ]
      },
      graph02: {
        theme: "dark1",
        colorSet: "argon-default",
        backgroundColor: "#172b4d",
        animationEnabled: true,
        data: [
          {
            type: "column",
            dataPoints: articlesWithMoreDownloads
          }
        ]
      },
      graph03: {
        theme: "light1",
        animationEnabled: true,
        data: [
          {
            type: "pie",
            dataPoints: [
              { label: "Apple",  y: 10 },
              { label: "Orange", y: 15 },
              { label: "Banana", y: 25 }
            ]
          }
        ]
      },
    })
  }, [articlesPublishedByYear, articlesWithMoreDownloads])

  return (
    <div className="container-fluid mt--7">
      <div className="row">
        <div className="col-xl-12 mb-5 mb-xl-0">
          <div className="card bg-dark-graph">
            <div className="card-header bg-transparent">
              <div className="row align-items-center">
                <div className="col mb-3">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    Visão Geral
                  </h6>
                  <h2 className="text-white mb-0">Publicações de Artigos por Ano</h2>
                </div>
                <div className="col-12 m-0 p-0">
                  {loading || alert.length > 0 ? (
                    <Spinner loading={loading} />
                  ) : (
                    <Chart options={graphsData.graph01} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-xl-8 mb-5 mb-xl-0">
          <div className="card bg-dark-graph">
            <div className="card-header bg-transparent">
              <div className="row align-items-center">
                <div className="col mb-3">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    Visão Geral
                  </h6>
                  <h2 className="text-white mb-0">Número de Downloads por Artigo</h2>
                </div>
                <div className="col-12 m-0 p-0">
                  {loading || alert.length > 0 ? (
                    <Spinner loading={loading} size={92} />
                  ) : (
                    <Chart options={graphsData.graph02} />
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
                  <h2 className="mb-0">Número de Visualizações por Artigo</h2>
                </div>
              </div>
            </div>
            <div className="card-body">
              {loading || alert.length > 0 ? (
                <Spinner loading={loading} />
              ) : (
                <Chart options={graphsData.graph03} />
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
