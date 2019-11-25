// React & Redux
import React, { useEffect, useState } from 'react'
import { Redirect, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getArticlesSearch, getUsersSearch, getCoursesSearch } from '../../../actions/search'

// Components
import NotFound from '../../pages/NotFound'
import Footer from '../../layout/Footer'
import Spinner from '../../layout/Spinner'
import Chart from '../../../config/charts'

// Search
const Search = () => {
  // Dispatch
  const dispatch = useDispatch()

  // Match
  const match = useRouteMatch().params

  // Local state
  const [chartsData, setChartsData] = useState({})

  // Global states
  const results = useSelector(state => state.search.results)
  const chartTitles = useSelector(state => state.search.chartTitles)
  const loading = useSelector(state => state.search.loading)

  // Component mount
  useEffect(() => {
    switch (match.page) {
      case 'cursos':
        // dispatch(getCoursesSearch(match.search))
        break

      case 'artigos':
        dispatch(getArticlesSearch(match.search))
        break

      case 'usuarios':
        // dispatch(getUsersSearch(match.search))
        break

      default:
        return <Redirect to="" />
    }
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
          dataPoints: results[0]
        }]
      },
      chart02: {
        theme: 'light1',
        animationEnabled: true,
        data: [{
          type: 'column',
          dataPoints: results[1]
        }]
      },
    })
  }, [results])

  return (
    <div>
      {!loading && results.length > 0 ? (
        <div className="container-fluid mt--8">
          <div className="row">
            <div className="col-xl-12 mb-5 mb-xl-0">
              <div className="jumbotron shadow mb-3 border p-3">
                <h2 className="m-0 font-weight-bold">
                  Resultados para: <span className="text-primary">{match.search}</span>
                </h2>
              </div>
              <div className="card shadow bg-dark-graph">
                <div className="card-header bg-transparent">
                  <div className="row align-items-center">
                    <div className="col mb-3">
                      <h6 className="text-uppercase text-light ls-1 mb-1">
                        Visão Geral
                      </h6>
                      <h2 className="text-white mb-0">
                        {chartTitles[0]}
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
                        {chartTitles[1]}
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
      ) : (
        <NotFound returnPage={match.page} />
      )}
    </div>
  )
}

export default Search
