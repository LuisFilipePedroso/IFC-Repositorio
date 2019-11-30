// React & Redux
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getArticlesWithMoreViews, getArticlesWithMoreDownloads } from '../../../actions/articles'

// Components
import Footer from '../../layout/Footer'
import Spinner from '../../layout/Spinner'
import Chart from '../../../config/charts'

// Articles
const Articles = () => {
  // Local state
  const [chartsData, setChartsData] = useState({})

  // Global states
  const articlesWithMoreViews = useSelector(state => state.articles.articles.articlesWithMoreViews)
  const articlesWithMoreDownloads = useSelector(state => state.articles.articles.articlesWithMoreDownloads)
  const loading = useSelector(state => state.articles.loading)
  const alert = useSelector(state => state.alert)

  // Dispatch
  const dispatch = useDispatch()

  // Component mount
  useEffect(() => {
    dispatch(getArticlesWithMoreViews())
    dispatch(getArticlesWithMoreDownloads())
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
          type: 'column',
          dataPoints: articlesWithMoreViews
        }]
      },
      chart02: {
        theme: 'light1',
        animationEnabled: true,
        data: [{
          type: 'column',
          dataPoints: articlesWithMoreDownloads
        }]
      },
    })
  }, [articlesWithMoreViews, articlesWithMoreDownloads])

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
                    Artigos com Mais Visualizações
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
                    Artigos com Mais Downloads
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
      <Footer />
    </div>
  )
}

export default Articles
