import React, { Component } from 'react';
import 'bulma/css/bulma.css'
import logo from '../HappyHopsLogo.png';
class Navbar extends Component {
  render() {
    return ( 
      <nav className="navbar is-primary is-bold" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
          <img src={logo} id="smallhopslogo" />
          </div>
          <div className="navbar-item">
            <button className="button is-primary is-inverted is-outlined">
              Happy Hops
            </button>
          </div>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="navbar-start">
          <div className="navbar-item">
            <button className="button is-primary is-inverted is-outlined">
              All Bars
            </button>
          </div>
        </div>
     </nav>
    )
  }
}

export default Navbar;
