import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.css'

import { Provider } from 'react-redux'
import store from './store'

import Landing from './components/landing/Landing'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import About from './components/about/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import PrivateRoute from './components/common/routes/PrivateRoute'
import Home from './components/home/Home'
import ChangePassword from './components/auth/ChangePassword'
import setAuthToken from './utils/setAuthToken'
import { setCurrentUser, logoutUser } from './actions/authActions'

if (
  localStorage.expiry &&
  localStorage.expiry <
    new Date()
      .getTime()
      .toString()
      .slice(0, 10)
) {
  store.dispatch(logoutUser)
  window.location.href = '/login'
} else if (
  localStorage.accessToken &&
  localStorage.client &&
  localStorage.uid &&
  localStorage.user
) {
  setAuthToken(localStorage.accessToken, localStorage.client, localStorage.uid)
  store.dispatch(setCurrentUser(JSON.parse(localStorage.user)))
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Landing} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute
                  exact
                  path="/change-password"
                  component={ChangePassword}
                />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
