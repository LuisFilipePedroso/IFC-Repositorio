// Action types
import { SET_LOADING, REMOVE_LOADING, GET_ARTICLES_PUBLISHED_BY_YEAR, GET_ARTICLES_AND_DOWNLOADS, GET_ARTICLES_AND_VIEWS } from './types'

// Actions
import { setAlert } from '../actions/alert'

// Others
import api from '../services/api'
import { countBy, forIn, isEmpty } from 'lodash'

// Artigos publicados por ano
export const getArticlesPublishedByYear = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/articles')

    const datas = res.data.map(article => article.year)
    const occurences = countBy(datas)

    let articlesPublishedByYear = []
    forIn(occurences, (value, key) => {
      articlesPublishedByYear = [...articlesPublishedByYear, { label: key, y: value }]
    })

    dispatch({
      type: GET_ARTICLES_PUBLISHED_BY_YEAR,
      payload: articlesPublishedByYear
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}

// Artigos por data de publicação e seus downloads
export const getArticlesAndDownloads = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/articles')

    let articlesAndDownloads = []
    let count = 0
    forIn(res.data, value => {
      if (!isEmpty(value.ArticlesStatistic)) {
        articlesAndDownloads = [...articlesAndDownloads, {
          label: `${value.title.substr(0, 15)}...`,
          y: value.ArticlesStatistic.downloads
        }]
        count ++
        if (count >= 10) {
          return false
        }
      }
    })

    dispatch({
      type: GET_ARTICLES_AND_DOWNLOADS,
      payload: articlesAndDownloads
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}

// Artigos por data de publicação e suas visualizações
export const getArticlesAndViews = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/articles')

    let articlesAndViews = []
    let count = 0
    forIn(res.data, value => {
      if (!isEmpty(value.ArticlesStatistic)) {
        articlesAndViews = [...articlesAndViews, {
          label: `${value.title.substr(0, 15)}...`,
          y: value.ArticlesStatistic.views
        }]
        count ++
        if (count >= 10) {
          return false
        }
      }
    })

    dispatch({
      type: GET_ARTICLES_AND_VIEWS,
      payload: articlesAndViews
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}
