import React, { Component } from 'react'
import PageHeader from '../common/ui/PageHeader'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/home')
    }
  }

  render() {
    return (
      <div>
        <PageHeader content="Landing Page" />
      </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(Landing)
