import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class Navbar extends Component {
  render() {
    return ( 
      <nav className="navbar is-link" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
            <button className="button is-link is-inverted">
              Happy Hops
            </button>
   
          </div>
          <span></span>
          <span></span>
          <span></span>
        </div>

      <div className="navbar-start">
        <div className="navbar-item">
          <button className="button is-link">
              All Bars
          </button>
        </div>
      </div>
     </nav>



    )
  }
}

export default Navbar;
