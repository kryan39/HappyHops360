import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css'
import '../App.css'
class Landing extends Component {
	render() {
		return (
			<div id="landing">

				<section class="hero is-fullheight is-primary is-bold">
					<div class="hero-body">
						<div class="container">
							<h1 class="title">
								Happy Hops
							</h1>
							<h2 class="subtitle">
								barhopping. simplified.
							</h2>
							<Link to='/neighborhoods'>
								<a class="button is-primary is-inverted is-outlined">Let's Drink!</a>
							</ Link>
						</div>
					</div>
			  </section>
			</div>
		)
	}
}

export default Landing;
