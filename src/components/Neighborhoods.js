import React, { Component } from 'react';

class Neighborhoods extends Component {

	constructor(props) {
		super(props);
		this.state = {
			inputvalue: ''
		}
	}

	handleChange(event) {
		this.setState({
			inputvalue: event.target.value
		});
	}

	handleSubmit (event) {
		console.log('Form value: ' + this.state.inputvalue);
		event.preventDefault();
	}

	render () {
		return (
			<div id="field">
				<div className="box">
					<form onSubmit={this.handleSubmit.bind(this)}>
						<input type="text" className="input is-rounded" placeholder="neighborhood" value={this.state.inputvalue} onChange={this.handleChange.bind(this)}/>
						<input className="button is-primary" type="submit" value="Search" />
					</form>
				</div>
			</div>
		);
	}
}

export default Neighborhoods;