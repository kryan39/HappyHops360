import React, { Component } from 'react';
import Navbar from './Navbar';
import Map from './Mapsearch';
import Bars from './Bars'
class Layout extends Component {

  render() {
    return(
      <div id="layout">
      <Navbar />
      <Map/>
      <Bars />
    </div>
    )
  }
}

export default Layout;