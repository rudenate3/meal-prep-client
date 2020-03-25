import { useState } from 'react'

const useForm = cb => {
  const [inputs, setInputs] = useState({})

  const handleSubmit = e => {
    if (e) {
      e.preventDefault()
    }
    cb()
  }

  const handleInputChange = e => {
    e.persist()
    setInputs(inputs => ({
      ...inputs,
      [e.target.name]: e.target.value
    }))
  }

  return {
    handleSubmit,
    handleInputChange,
    inputs
  }
}

export default useForm
