const development = 'http://localhost:3000',
  production = ''

export default (process.env.NODE_ENV === 'production'
  ? production
  : development)
