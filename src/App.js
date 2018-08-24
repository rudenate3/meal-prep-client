import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Landing from './components/landing/Landing'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Landing} />
        </div>
      </Router>
    )
  }
}

export default App
