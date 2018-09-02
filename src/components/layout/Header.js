import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render() {
    const anonLinks = (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to={'/'}>
            Home
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to={'/about'}>
            About
          </Link>
        </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <Link className="navbar-brand" to={'/'}>
          Meal Prep
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          {anonLinks}
        </div>
      </nav>
    )
  }
}
