import React from 'react'

import { NavigationBar } from '../'

import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

const style = {
  fontFamily: 'Roboto, sans-serif'
}
const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>;
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>;
const nearbyIcon = <IconLocationOn />;


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