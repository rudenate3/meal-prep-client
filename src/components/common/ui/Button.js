import React from 'react'

export default ({ content, type = 'primary', onClick }) => {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {content}
    </button>
  )
}
