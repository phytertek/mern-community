import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    cursor: 'pointer',
  }
}

function handleTouchTap() {
  browserHistory.push('/')
}

function handleSignupTap() {
  browserHistory.push('/signup')
 
}
class NavigationBar extends Component {
  render() {
    return (
      <AppBar
        title={<span style={styles.title}>Phytertek</span>}
        showMenuIconButton={false}
        onTitleTouchTap={handleTouchTap}
        iconElementRight={
          <FlatButton label="Sign Up" onTouchTap={handleSignupTap}/>
        }
      />
    )
  }
}

export default NavigationBar

 