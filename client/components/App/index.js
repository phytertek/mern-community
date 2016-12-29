import React from 'react'

import { NavigationBar } from '../'

const style = {
  fontFamily: 'Roboto, sans-serif'
}

const App = React.createClass({
  render() {
    return(
        <div style={style}>
          <NavigationBar />
          {this.props.children}
        </div>
    )
  }
})

export default App