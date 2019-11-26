// React & Redux
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getTagsMoreUsedInArticles } from '../../../actions/tags'

// Components
import Footer from '../../layout/Footer'
import Spinner from '../../layout/Spinner'
import Chart from '../../../config/charts'

// Courses
const Courses = () => {
  // Local state
  const [chartsData, setChartsData] = useState({})

  // Global states
  const tagsMoreUsedInArticles = useSelector(state => state.tags.tags.tagsMoreUsedInArticles)
  const loading = useSelector(state => state.tags.loading)
  const alert = useSelector(state => state.alert)

  // Dispatch
  const dispatch = useDispatch()

  // Component mount
  useEffect(() => {
    dispatch(getTagsMoreUsedInArticles())
  }, [dispatch])

  // Courses update
  useEffect(() => {
    setChartsData({
      chart01: {
        theme: 'dark1',
        colorSet: 'argon-default',
        backgroundColor: '#172b4d',
        animationEnabled: true,
        data: [{
          type: 'bar',
          dataPoints: tagsMoreUsedInArticles
        }]
      }
    })
  }, [tagsMoreUsedInArticles])

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
                    Tags mais utilizadas em Artigos
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
      <Footer />
    </div>
  )
}

export default Courses
