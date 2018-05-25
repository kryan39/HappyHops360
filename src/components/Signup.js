import React, { Component } from 'react';
import { Link } from "react-router-dom";

import 'bulma/css/bulma.css';

class Signup extends Component{
  render () {
    return (
      <div id="signupform">
        <section className="hero is-fullheight is-medium is-primary is-bold">
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
                        <input class="input is-primary" type="text" placeholder="username"></input>
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
        </section>
      </div>
    );
  }
}


  export default Signup;