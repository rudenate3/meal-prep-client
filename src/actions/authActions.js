import axios from 'axios'
import { GET_ERRORS, SET_CURRENT_USER } from './types'
import setAuthToken from '../utils/setAuthToken'
import api from '../api'

export const registerUser = (userData, history) => dispatch => {
  axios
    .post(`${api}/auth`, userData)
    .then(res => history.push('/login'))
    .catch(err => {
      const errors = {}

      if (err.response.data.errors.email) {
        errors.email = 'Email ' + err.response.data.errors.email[0]
      }

      if (err.response.data.errors.password) {
        errors.password = 'Password ' + err.response.data.errors.password[0]
      }

      if (
        !err.response.data.errors.password &&
        err.response.data.errors.password_confirmation
      ) {
        errors.password_confirmation =
          'Confirm Password ' +
          err.response.data.errors.password_confirmation[0]
      }
      dispatch({
        type: GET_ERRORS,
        payload: errors
      })
    })
}

export const loginUser = userData => dispatch => {
  axios
    .post('/auth/sign_in', userData)
    .then(res => {})
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    payload: user
  }
}

export const logoutUser = () => dispatch => {
  setAuthToken(false)
  dispatch(setCurrentUser({}))
}
