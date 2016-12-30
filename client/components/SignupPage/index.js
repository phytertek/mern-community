import React from 'react'
import { connect } from 'react-redux'
import { userSignupRequest } from '../../actions'

import { SignupForm } from '../'

const SignupPage = React.createClass({
  render() {
    const { userSignupRequest } = this.props
    return(
      <div className="row">
        <div className="col-md-4 col-md-offset-4">
          <SignupForm userSignupRequest={userSignupRequest}/>
        </div>
      </div>
    )
  }
})

SignupPage.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(SignupPage)