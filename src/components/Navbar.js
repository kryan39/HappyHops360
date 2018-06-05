import React, { Component } from 'react';
import fire from '../config/Fire'
import 'bulma/css/bulma.css'
import logo from '../assets/HappyHopsLogo.png';
import Map from './Mapsearch';

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
      <nav className="navbar is-primary is-bold is-2" aria-label="main navigation">
        <div className="navbar-brand">
          <div className="navbar-item">
          <img src={logo} alt="smallhopslogo" />
          </div>

          <div className="navbar-item">
            <button className="button is-primary is-inverted is-outlined">
              Happy Hops
            </button>
          </div>

          <div className="navbar-item is-1">
            <button className="button is-primary is-inverted">
              Lake View
            </button>
          </div>

          <div className="navbar-item is-1">
            <button className="button is-primary is-inverted">
              Roscoe Village
            </button>
          </div>

          <div className="navbar-item is-1">
            <button className="button is-primary is-inverted">
              River North
            </button>
          </div>

          <div className="navbar-item is-1">
            <button className="button is-primary is-inverted">
              Wicker Park
            </button>
          </div>

          <div className="navbar-item is-1">
            <button className="button is-primary is-inverted">
              Logan Square
            </button>
          </div>

          <div className="navbar-item is-1">
            <button className="button is-primary is-inverted">
              Old Town
            </button>
          </div>

          <div className="navbar-item is-1">
            <button className="button is-primary is-inverted">
              West Loop
            </button>
          </div>

          <div className="navbar-item is-1">
            <button className="button is-primary is-inverted">
              Gold Coast
            </button>
          </div>

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
