import axios from 'axios'


export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData)
  }
}

// export default {
//   userSignupRequest: userData => {return dispatch => {return axios.post('/api/users', userData)}},
  
// }