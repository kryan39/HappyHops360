import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import '../App.css'
//import Bars from './Bars.js']

const MyMapComponent =  withScriptjs(withGoogleMap((props) =>
		<GoogleMap
			defaultZoom={11}
			defaultCenter={{ lat: 41.8781, lng: -87.6298 }}
		>
			{props.isMarkerShown && <Marker position={{ lat: 41.8781, lng: -87.6298 }} />}
		</GoogleMap>
))
 
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

	componentDidMount() {
	
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
				<MyMapComponent 
					isMarkerShown 
					googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&key=AIzaSyAyt8XEpBmVkz9BjKc1-My-q7OoxTyvt8c"
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
		);
	}
}

export default Neighborhoods;