import React, { Component } from 'react';
import 'bulma/css/bulma.css'

class Header extends Component {
	render() {
		return (
			<div id="header">
				<section class="hero is-fullheight is-primary is-bold">
					<div class="hero-body">
						<div class="container">
							<h1 class="title">
								Happy Hops
							</h1>
							<h2 class="subtitle">
								barhopping. simplified.
							</h2>
							<a class="button is-primary is-inverted is-outlined">Let's Drink!</a>
						</div>
					</div>
			    </section>
			</div>
		)
	}
}

export default Header;
