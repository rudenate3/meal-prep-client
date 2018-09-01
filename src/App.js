import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import Landing from './components/landing/Landing'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <Route exact path="/" component={Landing} />
          </div>
        </Router>
      </Provider>
    )
  }
}

export default App
