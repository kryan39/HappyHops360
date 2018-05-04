import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class Navbar extends Component {
  render() {
    return ( 
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
      </nav>
    )
  }
}

export default Navbar;
