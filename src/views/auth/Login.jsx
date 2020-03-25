import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'

import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

import { AuthContext } from '../../context/AuthContext'

import useForm from '../../hooks/useForm'

const LOGIN_USER = gql`
  mutation LoginUser($email: String!, $password: String!) {
    loginUser(input: { email: $email, password: $password }) {
      user {
        name
        email
      }
      token
      exp
      errors
    }
  }
`

const Login = () => {
  const onSubmit = () => loginUser({ variables: { ...inputs } }),
    { inputs, handleInputChange, handleSubmit } = useForm(onSubmit),
    [loginUser, { data }] = useMutation(LOGIN_USER),
    [isAuthenticated, setAuthenticated] = useContext(AuthContext)

  if (data && data.loginUser.token) {
    setAuthenticated(true)
    localStorage.setItem('token', data.loginUser.token)
  }
  return isAuthenticated ? (
    <Redirect to="/users" />
  ) : (
    <>
      <h4>Login</h4>
      <span>Token: {(data && data.loginUser.token) || ''}</span>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            onChange={handleInputChange}
            value={inputs.email || ''}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleInputChange}
            value={inputs.password || ''}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  )
}

export default Login
