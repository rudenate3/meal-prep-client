import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { changePassword } from '../../actions/authActions'
import TextFieldInput from '../common/input/TextFieldInput'
import Button from '../common/ui/Button'

class ChangePassword extends Component {
  constructor() {
    super()
    this.state = {
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors })
    }
  }

  onSubmit(e) {
    e.preventDefault()

    const newPassword = {
      password: this.state.password,
      password_confirmation: this.state.password_confirmation
    }

    this.props.changePassword(newPassword, this.props.history)
  }

  render() {
    const { errors } = this.state

    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto card p-5">
              <h1 className="display-4 text-center">Change Password</h1>
              <p className="lead text-center">Change your password</p>
              <form noValidate onSubmit={this.onSubmit}>
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

ChangePassword.propTypes = {
  changePassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object
}

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
})

export default connect(
  mapStateToProps,
  { changePassword }
)(withRouter(ChangePassword))
