import axios from 'axios'

const setAuthToken = (accessToken, client, uid) => {
  if (accessToken && client && uid) {
    axios.defaults.headers.common['access-token'] = accessToken
    axios.defaults.headers.common['client'] = client
    axios.defaults.headers.common['uid'] = uid
  } else {
    delete axios.defaults.headers.common['access-token']
    delete axios.defaults.headers.common['client']
    delete axios.defaults.headers.common['uid']
  }
}

export default setAuthToken
