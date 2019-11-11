// Action types
import { SET_LOADING, REMOVE_LOADING, GET_ARTICLES } from './types'

// Actions
import { setAlert } from '../actions/alert'

// Others
import { api } from '../config/api'
import moment from 'moment'
import { countBy, forIn } from 'lodash'

// Publicações por período (ano)
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
      type: GET_ARTICLES,
      payload: articlesPublishedByYear
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}
