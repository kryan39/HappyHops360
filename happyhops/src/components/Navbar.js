import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  //  state = {
      //  barListIsActive="",
    //    homeIsActive=""
//    }

    render() {
      return(
        <nav className="navbar is-link" aria-label="main navigation" height="200">
          <div className="navbar-brand" height="200">
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