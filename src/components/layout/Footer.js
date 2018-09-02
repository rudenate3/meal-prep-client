import React from 'react'
import './Footer.css'

export default () => {
  return (
    <footer className="bg-dark text-white text-center">
      Copyright &copy; {new Date().getFullYear()} Meal Prep
    </footer>
  )
}
