import React, { Component } from 'react'
import { browserHistory } from 'react-router'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const style = {
  title: {
    cursor: 'pointer',
    color: 'black'
  },
  button: {
    color: 'black'
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
        title={<span className="font-effect-3d-float" style={style.title}>Ҏ Ҥ ¥ Ț Ӭ Ԇ Ŧ Ξ Ҝ</span>}
        showMenuIconButton={false}
        onTitleTouchTap={handleTouchTap}
        iconElementRight={<FlatButton style={style.button} className="font-effect-3d-float" label="§ ї Ԍ ∏ _ ц ҏ" onTouchTap={handleSignupTap}/>}
      />
    )
  }
}

export default NavigationBar

 