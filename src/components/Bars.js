import React, { Component } from 'react';

class Bars extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }
  
  getData(props) {
		const yelp = require('yelp-fusion');
		const apiKey = '_wRjlRPtpZMtbkfj4Swjue3u2u_-k3eBpLuW0nk97IbrMiAtesvfF1I9dILJGzC9P_X5ZQFJS5uFCl6e422G5TkjIaNW9urOUNt6iJEGmwP5XtVKQAPpompvkMbnWnYx';

		const searchRequest = {
		categories: 'bars',
		location: this.props.location, // dynamic based on user input
		};

		const client = yelp.client(apiKey);

		client.search(searchRequest).then(response => {
		const firstResult = response.jsonBody.businesses.name;
    const prettyJson = JSON.stringify(firstResult, null, 4);
    console.log(prettyJson)
		return (prettyJson)
		}).catch(e => {
		  console.log(e);
		});
	}

  render() {
    return (
      <div className="barlist">
        {this.getData()}
      </div>
    )
  }
}

export default Bars;