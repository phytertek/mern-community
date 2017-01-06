import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App, Greetings, SignupPage } from '../components'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Greetings}/>
    <Route path="signup" component={SignupPage}/>
  </Route>
)