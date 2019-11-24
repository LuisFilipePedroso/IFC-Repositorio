// React & Redux
import React, { useEffect, useState } from 'react'
import { Redirect, useRouteMatch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import { getArticlesSearch, getUsersSearch, getCoursesSearch } from '../../../actions/search'

// Components
import NotFound from '../../pages/NotFound'

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

  // Match
  const match = useRouteMatch()

  // Local state
  const [chartData, setChartData] = useState({})

  // Search global state
  const results = useSelector(state => state.search.result)

  // Component mount
  useEffect(() => {
    switch (match.params.page) {
      case 'dashboard':
        break

      case 'cursos':
        dispatch(getCoursesSearch(match.params.search))
        break

      case 'artigos':
        break

      case 'usuarios':
        break

      default:
        return <Redirect to="" />
    }
  }, [dispatch])

  return (
    <div>
      {results.length > 0 ? (
        <>
          Conteúdo da busca: {match.params.search}<br />
          Tema da busca {match.params.page}<br />
          Resultado da busca: {results}
        </>
      ) : (
        <NotFound />
      )}
    </div>
  )
}

export default Search
