// Action types
import {
  SET_LOADING,
  REMOVE_LOADING,
  GET_ARTICLES_WITH_MORE_VIEWS,
  GET_ARTICLES_PUBLISHED_BY_YEAR,
  GET_ARTICLES_AND_DOWNLOADS,
  GET_ARTICLES_AND_VIEWS,
  GET_ARTICLES_WITH_MORE_DOWNLOADS
} from './types'

// Actions
import { setAlert } from '../actions/alert'

// Others
import api from '../services/api'
import { countBy, forIn, isEmpty } from 'lodash'

/**
 * Artigos publicados por ano
 */
export const getArticlesPublishedByYear = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/articles')

    const years = res.data.map(article => article.year)
    const occurences = countBy(years)

    let articlesPublishedByYear = []
    forIn(occurences, (value, key) => {
      articlesPublishedByYear = [...articlesPublishedByYear, {
        label: key,
        y: value
      }]
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

/**
 * Artigos por data de publicação e seus downloads
 */
export const getArticlesAndDownloads = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/articles')

    let articlesAndDownloads = []
    let count = 0
    forIn(res.data, value => {
      if (!isEmpty(value.ArticlesStatistic)) {
        if (value.title.length > 15) {
          value.title = `${value.title.substr(0, 15)}...`
        }

        articlesAndDownloads = [...articlesAndDownloads, {
          label: value.title,
          y: value.ArticlesStatistic.downloads
        }]
        count ++
        if (count >= 10) return false
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

/**
 * Artigos por data de publicação e suas visualizações
 */
export const getArticlesAndViews = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/articles')

    let articlesAndViews = []
    let count = 0
    forIn(res.data, value => {
      if (!isEmpty(value.ArticlesStatistic)) {
        if (value.title.length > 15) {
          value.title = `${value.title.substr(0, 15)}...`
        }

        articlesAndViews = [...articlesAndViews, {
          label: value.title,
          y: value.ArticlesStatistic.views
        }]
        count ++
        if (count >= 10) return false
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

/**
 * Artigos com mais visualizações
 */
export const getArticlesWithMoreViews = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/charts/articles')

    let articlesWithMoreViews = []
    forIn(res.data, value => {
      if (value.title.length > 15) {
        value.title = `${value.title.substr(0, 15)}...`
      }

      articlesWithMoreViews = [...articlesWithMoreViews, {
        label: value.title,
        y: value.views
      }]
    })

    dispatch({
      type: GET_ARTICLES_WITH_MORE_VIEWS,
      payload: articlesWithMoreViews
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}

/**
 * Artigos com mais downloads
 */
export const getArticlesWithMoreDownloads = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/charts/articles/downloads')

    let articlesWithMoreDownloads = []
    forIn(res.data, value => {
      if (value.title.length > 15) {
        value.title = `${value.title.substr(0, 15)}...`
      }

      articlesWithMoreDownloads = [...articlesWithMoreDownloads, {
        label: value.title,
        y: value.downloads
      }]
    })

    dispatch({
      type: GET_ARTICLES_WITH_MORE_DOWNLOADS,
      payload: articlesWithMoreDownloads
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}
