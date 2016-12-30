import { userSignupRequest } from './signupActions'

// export default {
//   signupActions
// }

// import axios from 'axios'

import { addFlashMessage } from './flashMessages'


// function userSignupRequest(userData) {
//   return dispatch => {
//     return axios.post('/api/users', userData)
//   }
// }

export {
  userSignupRequest,
  addFlashMessage
}