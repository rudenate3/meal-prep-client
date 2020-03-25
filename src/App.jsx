import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { AuthContextProvider } from './context/AuthContext'

import Header from './components/layout/Header'

import Landing from './views/Landing'
import Login from './views/auth/Login'
import Register from './views/auth/Register'
import Users from './views/Users'

import { StyledApp } from './app.styles'

const App = () => {
  return (
    <StyledApp>
      <AuthContextProvider>
        <Router>
          <Header />
          <div>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/users">
                <Users />
              </Route>
              <Route path="/">
                <Landing />
              </Route>
            </Switch>
          </div>
        </Router>
      </AuthContextProvider>
    </StyledApp>
  )
}

export default App
