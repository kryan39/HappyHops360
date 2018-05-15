import React, { Component } from 'react';
import Navbar from './Navbar';
import Neighborhoods from './Neighborhoods'
class Layout extends Component {

  render() {
    return(
      <div id="layout">
      <Navbar />
      <Neighborhoods />
    </div>
    )
  }
}

export default Layout;