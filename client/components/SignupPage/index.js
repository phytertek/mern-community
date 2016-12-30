import React from 'react'
import { connect } from 'react-redux'
import { userSignupRequest, addFlashMessage } from '../../actions'

import { SignupForm } from '../'

const SignupPage = React.createClass({
  render() {
    const { userSignupRequest, addFlashMessage } = this.props
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest} addFlashMessage={addFlashMessage}/>
        </div>
      </div>
    )
  }
})

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage })(SignupPage)