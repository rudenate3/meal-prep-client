import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'

class Header extends Component {
  onLogoutClick(e) {
    e.preventDefault()
    this.props.logoutUser()
    this.props.history.push('/')
  }

  render() {
    const { isAuthenticated } = this.props.auth

    const anonLinks = (
      <React.Fragment>
        <li className="nav-item">
          <Link className="nav-link" to={'/login'}>
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/register'}>
            Register
          </Link>
        </li>
      </React.Fragment>
    )

    const authLinks = (
      <React.Fragment>
        <li className="nav-item">
          <a
            style={{ cursor: 'pointer' }}
            onClick={this.onLogoutClick.bind(this)}
            className="nav-link"
          >
            Logout
          </a>
        </li>
      </React.Fragment>
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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to={'/'}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'/about'}>
                About
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            {isAuthenticated ? authLinks : anonLinks}
          </ul>
        </div>
      </nav>
    )
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(Header))
