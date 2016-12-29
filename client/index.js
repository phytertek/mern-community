import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {deepOrange500} from 'material-ui/styles/colors'

import routes from './routes'

import injectTapEventPlugin from 'react-tap-event-plugin'

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  }
})

injectTapEventPlugin()

render(
  <MuiThemeProvider muiTheme={muiTheme}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>
  , 
  document.getElementById('app')
)