import React, { Component } from 'react';
import '../App.css'
import Bars from './Bars.js'
class Neighborhoods extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputvalue: ''
		}
		this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			inputvalue: event.target.value
		});
	}

	handleSubmit (event) {
		event.preventDefault();
		console.log('Form value: ' + this.state.inputvalue);
	}

	render () {
		return (
			<div id="field">
				<div className="box">
					<form onSubmit={this.handleSubmit}>
						<input type="text" className="input is-rounded" placeholder="neighborhood" value={this.state.inputvalue} onChange={this.handleChange}/>
						<input className="button is-primary" type="submit" value="Search" />
					</form>
				</div>
				<Bars location={this.state.inputvalue} />
			</div>
		);
	}
}

export default Neighborhoods;