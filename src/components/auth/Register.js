import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import TextFieldInput from '../common/input/TextFieldInput'
import Button from '../common/ui/Button'

class Register extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      password_confirmation: '',
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
      this.props.history.push('/')
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onSubmit(e) {
    e.preventDefault()

    const newUser = {
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }

    this.props.registerUser(newUser, this.props.history)
  }

  render() {
    const { errors } = this.state

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto card p-5">
              <h1 className="display-4 text-center">Register</h1>
              <p className="lead text-center">Create your Meal Prep account</p>
              <form noValidate onSubmit={this.onSubmit}>
                <TextFieldInput
                  label="Email"
                  name="email"
                  value={this.state.email}
                  type="email"
                  onChange={this.onChange}
                  placeholder="Email..."
                  error={errors.email}
                />
                <TextFieldInput
                  label="Password"
                  name="password"
                  value={this.state.password}
                  type="password"
                  onChange={this.onChange}
                  placeholder="Password..."
                  error={errors.password}
                />
                <TextFieldInput
                  label="Confirm Password"
                  name="password_confirmation"
                  value={this.state.password_confirmation}
                  type="password"
                  onChange={this.onChange}
                  placeholder="Confirm Password..."
                  error={errors.password_confirmation}
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

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register))
