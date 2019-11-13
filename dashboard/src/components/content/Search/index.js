// React & Redux
import React, { useEffect, useState } from 'react'
import { Redirect, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

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

// Search
const Search = () => {
  // Dispatch
  const dispatch = useDispatch()

  // History
  const match = useRouteMatch()

  // Local state
  const [chartData, setChartData] = useState({})

  // Component mount
  useEffect(() => {
    console.log(match.params.search);
    console.log(match.params.page);
    switch (match.params.page) {
      case 'dashboard':
        break;

      case 'cursos':
        break;

      case 'artigos':
        break;

      case 'usuarios':
        break;

      default:
        return <Redirect to="" />
    }
  }, [])

  return (
    <div>
      busca
    </div>
  )
}


export default Search
