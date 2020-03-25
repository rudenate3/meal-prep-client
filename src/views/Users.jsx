import React from 'react'

import gql from 'graphql-tag'
import { useQuery } from '@apollo/react-hooks'

const GET_USERS = gql`
  {
    users {
      id
      name
      username
      email
    }
  }
`

const Users = () => {
  const { loading, error, data } = useQuery(GET_USERS)

  if (loading) return 'Loading...'
  if (error) return `${error}`

  return (
    <>
      <h4>Users</h4>
      <ul>
        {data.users.map((user, i) => (
          <li key={i}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Users
