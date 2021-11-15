import axios from 'axios';

class AuthService {
  login(user) {
    return axios.post(process.env.baseURL + 'signin', user)
  }

  register(user) {
    return axios.post(process.env.baseURL + 'signup', user)
  }

  verify() {
    return axios.get(process.env.baseURL + 'verify')
  }
}

export default new AuthService()