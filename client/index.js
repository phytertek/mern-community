import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'

import getMuiTheme from 'material-ui/styles/getMuiTheme'
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import {deepOrange500} from 'material-ui/styles/colors'

import routes from './routes'

import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

render(
  <Provider store={store}>
    <MuiThemeProvider>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>
  , 
  document.getElementById('app')
)