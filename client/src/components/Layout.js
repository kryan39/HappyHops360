import React, { Component } from 'react';
import Navbar from './Navbar';
import Map from './Mapsearch'
class Layout extends Component {

  render() {
    return(
      <div id="layout">
      <Navbar />
      <Map/>
    </div>
    )
  }
}

export default Layout;