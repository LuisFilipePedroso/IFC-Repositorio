// Action types
import { SET_LOADING, REMOVE_LOADING, GET_ARTICLES_SEARCH, NO_RESULTS, UPDATE_CHART_TITLES } from './types'

// Actions
import { setAlert } from '../actions/alert'

// Others
import api from '../services/api'
import { countBy, forIn, isEmpty } from 'lodash'

/**
 * Faz a busca pelo título do artigo, retornando o número de downloads
 * e o número de visualizações dos artigos com título semelhante
 *
 * @param {string} articleTitle
 */
export const getArticlesSearch = articleTitle => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const [resDownloads, resViews] = await Promise.all([
      api.get(`/charts/articles/downloads?title=${articleTitle}`),
      api.get(`/charts/articles?title=${articleTitle}`)
    ])

    if (resDownloads.data.length === 0 || resViews.data.length === 0) {
      dispatch({ type: NO_RESULTS })
      return
    }

    let articlesWithMoreDownloads = []
    forIn(resDownloads.data, value => {
      if (value.title.length > 15) {
        value.title = `${value.title.substr(0, 15)}...`
      }

      articlesWithMoreDownloads = [...articlesWithMoreDownloads, {
        label: value.title,
        y: value.downloads
      }]
    })

    let articlesWithMoreViews = []
    forIn(resViews.data, value => {
      if (value.title.length > 15) {
        value.title = `${value.title.substr(0, 15)}...`
      }

      articlesWithMoreViews = [...articlesWithMoreViews, {
        label: value.title,
        y: value.views
      }]
    })

    dispatch({
      type: UPDATE_CHART_TITLES,
      payload: ['Número de Downloads', 'Número de Visualizações']
    })

    dispatch({
      type: GET_ARTICLES_SEARCH,
      payload: [
        articlesWithMoreDownloads,
        articlesWithMoreViews
      ]
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}

/**
 * Busca cursos
 *
 * @param {string} content
 */
export const getCoursesSearch = content => async dispatch => {}

/**
 * Busca usuários
 *
 * @param {string} content
 */
export const getUsersSearch = content => async dispatch => {}
