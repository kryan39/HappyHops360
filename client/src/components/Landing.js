import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css';
import '../App.css';
import Login from './Login';
import Signup from './Signup';


class Landing extends Component {
	render() {
		
		return (
			<div id="landing">
				<section className="hero is-fullheight is-primary is-bold">
					<div className="hero-body">
						<div className="container">
							<h1 className="title">
								Happy Hops
							</h1>
							<h2 className="subtitle">
								barhopping. simplified.
							</h2>
							<Login/>
							<div>
        						<p id="signupbutton">
        							Haven't signed up?<br/> 
									<Link className="button is-primary is-inverted is-outlined" to="/signup">Sign Up now!</Link>	
        						</p>
      						</div>
							 
								
						</div>
					</div>
			  </section>
			</div>
		);
	}
}


  
  export default Landing;


