import React from 'react'

import gql from 'graphql-tag'
import { useMutation } from '@apollo/react-hooks'

import useForm from '../../hooks/useForm'

const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $username: String!
    $email: String!
    $password: String!
    $passwordConfirmation: String!
  ) {
    createUser(
      input: {
        name: $name
        username: $username
        email: $email
        password: $password
        passwordConfirmation: $passwordConfirmation
      }
    ) {
      user {
        id
        name
        username
      }
      errors
    }
  }
`

const Register = () => {
  const onSubmit = () => createUser({ variables: { ...inputs } }),
    { inputs, handleInputChange, handleSubmit } = useForm(onSubmit),
    [createUser, { data }] = useMutation(CREATE_USER)

  return (
    <>
      <h4>Register</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            onChange={handleInputChange}
            value={inputs.name || ''}
            required
          />
        </div>
        <div>
          <label>Username</label>
          <input
            type="text"
            name="username"
            onChange={handleInputChange}
            value={inputs.username || ''}
            required
          />
        </div>
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
        <div>
          <label>Confirm Password</label>
          <input
            type="password"
            name="passwordConfirmation"
            onChange={handleInputChange}
            value={inputs.passwordConfirmation || ''}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </>
  )
}

export default Register
