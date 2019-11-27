// Action types
import { SET_LOADING, REMOVE_LOADING, GET_TAGS_MORE_USED_IN_ARTICLES, GET_TAG_MORE_USED_IN_ARTICLES } from './types'

// Actions
import { setAlert } from '../actions/alert'

// Others
import api from '../services/api'
import { forIn } from 'lodash'

/**
 * Tags more used in articles
 */
export const getTagsMoreUsedInArticles = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/charts/toptags/articles')

    let tagsMoreUsedInArticles = []
    forIn(res.data, value => {
      tagsMoreUsedInArticles = [...tagsMoreUsedInArticles, {
        label: value.name,
        y: Number(value.qty)
      }]
    })

    dispatch({
      type: GET_TAGS_MORE_USED_IN_ARTICLES,
      payload: tagsMoreUsedInArticles
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}

/**
 * Tag more used in articles
 */
export const getTagMoreUsedInArticles = () => async dispatch => {
  dispatch({ type: SET_LOADING })
  try {
    const res = await api.get('/charts/toptags/articles')

    console.log(res.data);


    dispatch({
      type: GET_TAG_MORE_USED_IN_ARTICLES,
      payload: ''
    })
  } catch (err) {
    dispatch(setAlert('Ops, um erro inesperado ocorreu - Tente novamente mais tarde', 'danger'))
    dispatch({ type: REMOVE_LOADING })
  }
}
