import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { loginUser } from '../../actions/authActions'
import TextFieldInput from '../common/input/TextFieldInput'
import Button from '../common/ui/Button'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/home')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push('/home')
    }

    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onSubmit(e) {
    e.preventDefault()

    const userData = {
      email: this.state.email,
      password: this.state.password
    }

    this.props.loginUser(userData)
  }

  render() {
    const { errors } = this.state

    return (
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto card p-5">
              <h1 className="display-4 text-center">Log In</h1>
              <p className="lead text-center">Login to Meal Prep</p>
              <form onSubmit={this.onSubmit}>
                <TextFieldInput
                  label="Email"
                  name="email"
                  value={this.state.email}
                  type="email"
                  onChange={this.onChange}
                  placeholder="Email Address"
                />
                {errors.error && (
                  <div className="alert alert-danger mt-2">{errors.error}</div>
                )}
                <TextFieldInput
                  label="Password"
                  name="password"
                  value={this.state.password}
                  type="password"
                  onChange={this.onChange}
                  placeholder="Password"
                />
                <Button
                  type="submit"
                  content="Submit"
                  styles="mt-4"
                  block={true}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { loginUser }
)(Login)
