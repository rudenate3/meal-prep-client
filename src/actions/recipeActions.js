import axios from 'axios'
import api from '../api'

import {
  GET_ERRORS,
  GET_RECIPES,
  GET_RECIPE,
  ADD_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE
} from './types'

export const getRecipes = () => dispatch => {
  axios
    .get(`${api}/recipes`)
    .then(res => {
      const recipeArray = []
      res.data.forEach(recipe => recipeArray.push(recipe))
      dispatch({
        type: GET_RECIPES,
        payload: res.data
      })
    })
    .catch(err =>
      dispatch({
        type: GET_RECIPES,
        payload: null
      })
    )
}
