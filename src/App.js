import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css'

import { Provider } from 'react-redux'
import store from './store'

import Landing from './components/landing/Landing'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import About from './components/about/About'
import Register from './components/auth/Register'
import Login from './components/auth/Login'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Header />
            <div className="container">
              <Route exact path="/" component={Landing} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
