import React, { Component } from 'react';

class Bars extends Component {
  constructor(){
    super()
  }
  state = {
    bars= []
  }

  componentWillMount() {
		const yelp = require('yelp-fusion');
		const apiKey = '_wRjlRPtpZMtbkfj4Swjue3u2u_-k3eBpLuW0nk97IbrMiAtesvfF1I9dILJGzC9P_X5ZQFJS5uFCl6e422G5TkjIaNW9urOUNt6iJEGmwP5XtVKQAPpompvkMbnWnYx';

		const searchRequest = {
		categories: 'bars',
		location: 'lakeview, il' // dynamic based on user input
		};

		const client = yelp.client(apiKey);

		client.search(searchRequest).then(response => {
		const firstResult = response.jsonBody.businesses[1].name;
		const prettyJson = JSON.stringify(firstResult, null, 4);
		console.log(prettyJson);
		}).catch(e => {
		console.log(e);
		});
	}

  render () {
    return (
      
    )
  }
}

export default Bars;