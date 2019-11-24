// React & Redux
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getArticlesPublishedByYear, getArticlesAndDownloads, getArticlesAndViews } from '../../../actions/articles'

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
  // CanvasJS component
  const Chart = CanvasJSReact.CanvasJSChart

  // Local state
  const [chartsData, setChartsData] = useState({})

  // Global states
  const articlesPublishedByYear = useSelector(state => state.articles.articles.articlesPublishedByYear)
  const articlesAndDownloads = useSelector(state => state.articles.articles.articlesAndDownloads)
  const articlesAndViews = useSelector(state => state.articles.articles.articlesAndViews)
  const loading = useSelector(state => state.articles.loading)
  const alert = useSelector(state => state.alert)

  // Dispatch
  const dispatch = useDispatch()

  // Component mount
  useEffect(() => {
    dispatch(getArticlesPublishedByYear())
    dispatch(getArticlesAndDownloads())
    dispatch(getArticlesAndViews())
  }, [dispatch])

  // Articles update
  useEffect(() => {
    setChartsData({
      chart01: {
        theme: 'dark1',
        colorSet: 'argon-default',
        backgroundColor: '#172b4d',
        animationEnabled: true,
        data: [{
          type: 'spline',
          dataPoints: articlesPublishedByYear
        }]
      },
      chart02: {
        theme: 'light1',
        animationEnabled: true,
        data: [{
          type: 'column',
          dataPoints: articlesAndViews
        }]
      },
      chart03: {
        theme: 'dark1',
        colorSet: 'argon-default',
        backgroundColor: '#172b4d',
        animationEnabled: true,
        data: [{
          type: 'column',
          dataPoints: articlesAndDownloads
        }]
      }
    })
  }, [articlesPublishedByYear, articlesAndDownloads, articlesAndViews])

  return (
    <div className="container-fluid mt--8">
      <div className="row">
        <div className="col-xl-12 mb-5 mb-xl-0">
          <div className="card shadow bg-dark-graph">
            <div className="card-header bg-transparent">
              <div className="row align-items-center">
                <div className="col mb-3">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    Visão Geral
                  </h6>
                  <h2 className="text-white mb-0">
                    Publicações de Artigos por Ano
                  </h2>
                </div>
                <div className="col-12 m-0 p-0">
                  {loading || alert.length > 0 ? (
                    <Spinner loading={loading} />
                  ) : (
                    <Chart options={chartsData.chart01} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 mt-3">
          <div className="card shadow bg-light-graph">
            <div className="card-header bg-transparent">
              <div className="row align-items-center">
                <div className="col mb-3">
                  <h6 className="text-uppercase text-dark ls-1 mb-1">
                    Visão Geral
                  </h6>
                  <h2 className="text-dark mb-0">
                    Número de Visulizações dos Artigos mais Recentes
                  </h2>
                </div>
                <div className="col-12 m-0 p-0">
                  <div className="card-body">
                    {loading || alert.length > 0 ? (
                      <Spinner loading={loading} />
                    ) : (
                      <Chart options={chartsData.chart02} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-12 mt-3">
          <div className="card shadow bg-dark-graph">
            <div className="card-header bg-transparent">
              <div className="row align-items-center">
                <div className="col mb-3">
                  <h6 className="text-uppercase text-light ls-1 mb-1">
                    Visão Geral
                  </h6>
                  <h2 className="text-white mb-0">
                    Número de Downloads dos Artigos mais Recentes
                  </h2>
                </div>
                <div className="col-12 m-0 p-0">
                  <div className="card-body">
                    {loading || alert.length > 0 ? (
                      <Spinner loading={loading} />
                    ) : (
                      <Chart options={chartsData.chart03} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
