import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import '../App.css';


class Login extends Component {
  render() {
      return(
      <div className="login">
        <div id="input">
          <h1 className="subtitle" id="login">Please Login</h1>
          <div class="field">
            <p class="control has-icons-left has-icons-right">
              <input class="input" type="email" placeholder="Email"/>
              <span class="icon is-small is-left">
                <i class="fas fa-envelope"></i>
              </span>
              <span class="icon is-small is-right">
               <i class="fas fa-check"></i>
              </span>
            </p>
            <p class="control has-icons-left">
              <input class="input" type="password" placeholder="Password"/>
              <span class="icon is-small is-left">
                <i class="fas fa-lock"></i>
              </span>
            </p>
          </div>
          <p class="control">
            <Link className="button is-primary is-inverted is-outlined" to="/search">
              Let's Drink!
            </Link>
          </p>
        </div>
      </div>
    )
  }
}

export default Login