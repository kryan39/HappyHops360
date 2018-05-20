import React, { Component } from 'react';
import { Link } from "react-router-dom";
import 'bulma/css/bulma.css'
import '../App.css'
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
							<Link className="button is-primary is-inverted is-outlined" to='/search'>
								Let's Drink!
							</Link>
						</div>
					</div>
			  </section>
			</div>
		)
	}
}

export default Landing;
