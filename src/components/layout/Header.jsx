import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'

import { AuthContext } from '../../context/AuthContext'

const Header = () => {
  const [isAuthenticated, setAuthenticated] = useContext(AuthContext)

  return isAuthenticated ? (
    <>
      <h3>MealPrep</h3>
      <button
        onClick={() => {
          localStorage.setItem('token', '')
          setAuthenticated(false)
        }}
      >
        Logout
      </button>
    </>
  ) : (
    <>
      <h3>MealPrep</h3>
      <NavLink to="/login">Login</NavLink> |{' '}
      <NavLink to="/register">Register</NavLink>
    </>
  )
}

export default Header
