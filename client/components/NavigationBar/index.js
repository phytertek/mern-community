import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    cursor: 'pointer',
    texShadow: '4px 4px 4px #aaa'
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
        title={<span className="font-effect-3d-float" style={styles.title}>Ҏ Ҥ ¥ Ț Ӭ Ԇ т ∑ Ҝ</span>}
        showMenuIconButton={false}
        onTitleTouchTap={handleTouchTap}
        iconElementRight={<FlatButton className="font-effect-3d-float" label="Sign Up" onTouchTap={handleSignupTap}/>}
      />
    )
  }
}

export default NavigationBar

 