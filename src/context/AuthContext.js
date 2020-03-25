import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [isAuthenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('token')) setAuthenticated(true)
  }, [])

  return (
    <AuthContext.Provider value={[isAuthenticated, setAuthenticated]}>
      {props.children}
    </AuthContext.Provider>
  )
}
