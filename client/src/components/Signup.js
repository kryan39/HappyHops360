import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import 'bulma/css/bulma.css';
import injectSheet from 'react-jss';

class Signup extends Component{

    render () {
    return (
       <div>
        <section className="hero">
          <div className="hero-body">
            <p className="title has-text-centered">
              Registration
            </p>
            <p className="subtitle has-text-centered">
              Please Register to access DePaul Degree Planner
            </p>
          </div>
        </section>

        <nav className="level">
          <div className="level-item">
            <form onSubmit={this.handleSubmit}>
              <div className="field">
                <label className="label">Name</label>
                <div className="control has-icons-right">
                </div>
                </div>
            </form>
        </div>
      </nav>
    </div>
   
    );
  }
}


  export default Signup;