// import signupActions from './signupActions'

// export default {
//   signupActions
// }

import axios from 'axios'


function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData)
  }
}

export {
  userSignupRequest,
  
}