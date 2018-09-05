import {
  GET_RECIPES,
  GET_RECIPE,
  ADD_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE
} from '../actions/types'

const initialState = {
  recipes: [],
  recipe: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
