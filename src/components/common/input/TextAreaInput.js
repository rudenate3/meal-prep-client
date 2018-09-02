import React from 'react'
import PropTypes from 'prop-types'

const TextAreaInput = ({
  name,
  placeholder,
  value,
  label,
  error,
  info,
  onChange
}) => {
  return (
    <div className="form-group">
      {label && <label for={name}>{label}</label>}
      <textarea
        className="form-control form-control-lg"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

TextAreaInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  label: PropTypes.string,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired
}

export default TextAreaInput
