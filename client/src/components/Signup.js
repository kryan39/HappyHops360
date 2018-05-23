import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import 'bulma/css/bulma.css';
import injectSheet from 'react-jss';

class Signup extends Component{

    render () {
    return (
       
        <section className="hero is-fullheight is-medium is-primary is-bold">
        <div id="signupform">
        <p className="title has-text-centered">
              Sign up!
            </p>
         <div className="hero-body">
        <nav className="level">
          <div className="level-item">
            <form onSubmit={this.handleSubmit}>
              <div class="field">
              <p class="control has-icons-left has-icons-right">
              <label className="subtitle">Name</label>
                <div class="control  has-icons-right">
                  <input class="input is-primary" type="text" placeholder="Name"></input>
                </div>
                </p>
              </div>

            <div class="field">
            <p class="control has-icons-left has-icons-right">
              <label className="subtitle">Email</label>
                <div class="control  has-icons-right">
                  <input class="input is-primary" type="text" placeholder="Email"></input>
                </div>
              </p>
              </div>

              <div class="field">
              <p class="control has-icons-left has-icons-right">
              <label className="subtitle">Password</label>
                <div class="control  has-icons-right">
                  <input class="input is-primary" type="text" placeholder="Password"></input>
                </div>
              </p>
              </div>
              <p id="submit">
									<Link className="button is-primary is-inverted is-outlined" to="/search">Let's Drink!</Link>	
        						</p>
            </form>
        </div>
      </nav>
      </div>
      </div>
      </section>
    
    
  
   
    );
  }
}


  export default Signup;