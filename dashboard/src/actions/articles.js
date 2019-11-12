// Action types
import { SET_LOADING, REMOVE_LOADING, GET_ARTICLES_PUBLISHED_BY_YEAR, GET_ARTICLES_WITH_MORE_DOWNLOADS } from './types'

// Actions
import { setAlert } from '../actions/alert'

// Others
import { api } from '../config/api'
import moment from 'moment'
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

// Artigos com mais downloads
export const getArticlesWithMoreDownloads = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/articles')

    let articlesWithMoreDownloads = []
    let count = 0
    forIn(res.data, value => {
      if (!isEmpty(value.ArticlesStatistic)) {
        articlesWithMoreDownloads = [...articlesWithMoreDownloads, {
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
      type: GET_ARTICLES_WITH_MORE_DOWNLOADS,
      payload: articlesWithMoreDownloads
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}
