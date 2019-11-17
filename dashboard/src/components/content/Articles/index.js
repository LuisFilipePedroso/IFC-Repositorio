// React & Redux
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions

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

// Articles
const Articles = () => {
  // CanvasJS component
  const Chart = CanvasJSReact.CanvasJSChart

  // Local state
  const [chartsData, setChartsData] = useState({})

  // Global states

  // Dispatch
  const dispatch = useDispatch()

  // Component mount
  useEffect(() => {
  }, [])

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
                    <></>
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

export default Articles
