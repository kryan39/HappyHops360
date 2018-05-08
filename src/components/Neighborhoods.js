import React, { Component } from 'react';

class Neighborhoods extends Component {
	render () {
		return (
			<aside class="menu">
				<p class="menu-label">
					District
				</p>
				<ul class="menu-list">
					<li><a>Far North Side</a></li>
					<li><a>Northwest Side</a></li>
					<li><a>North Side</a></li>
					<li><a>West Side</a></li>
					<li><a>Central</a></li>
					<li><a>Southwest Side</a></li>
					<li><a>South Side</a></li>
					<li><a>Far Southwest Side</a></li>
					<li><a>Far Southeast Side</a></li>
				</ul>
			</aside>
		);
	}
}

export default Neighborhoods;