import { api } from '@/api/api.js'

export default {
  register (credentials) {
    return api('/api/users', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
  },
  login (credentials) {
    return api('/api/login_check', {
      method: 'POST',
      body: JSON.stringify(credentials)
    })
  },
  user () {
    return api('/me')
  }
}
