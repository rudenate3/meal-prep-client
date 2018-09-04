import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

const Button = ({ content, buttonType, onClick, type, styles, block }) => {
  return (
    <button
      className={classnames(`btn btn-${buttonType} ${styles}`, {
        'btn-block': block
      })}
      onClick={onClick}
      type={type}
    >
      {content}
    </button>
  )
}

Button.propTypes = {
  content: PropTypes.string.isRequired,
  buttonType: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  styles: PropTypes.string,
  block: PropTypes.bool
}

Button.defaultProps = {
  buttonType: 'primary',
  type: 'button'
}

export default Button
