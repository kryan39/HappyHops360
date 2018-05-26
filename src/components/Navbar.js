import React, { Component } from 'react';
import fire from '../config/Fire'
import 'bulma/css/bulma.css'
import logo from '../assets/HappyHopsLogo.png';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    fire.auth().signOut();
  }
  
  render() {
    return ( 
      <nav className="navbar is-primary is-bold" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
          <img src={logo} alt="smallhopslogo" />
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
        <div className="navbar-end">
          <div className="navbar-item">
            <button onClick={this.logout} className="button is-primary is-inverted is-outlined">
              sign out
            </button>
          </div>
        </div>
     </nav>
    )
  }
}

export default Navbar;
