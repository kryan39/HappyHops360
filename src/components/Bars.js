import React, { Component } from 'react';
import '../App.css';

class Bars extends Component {
  constructor(){
    super()
  }
  state = {
    
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
			<span id='entire'>
      <section className='section'>
			<div className='container'>
					<h1 className="title has-text-left">Lakeview</h1>
					<hr/>
					 <div className="is-divider" />
						<a><div id='barBox' class='box'>
							<article class='media'>
								<div class='media-left'>
									<figure class="image is-64x64">
        						<img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
      						</figure>
								</div>
								<div class='media-content'>
									<div class='content'>
									<p>
										<strong><a>Bar Name</a></strong><br></br>
										Address<br></br>
										Happy hour times
									</p>
									</div>
								</div>
							</article>
						</div></a>
				</div>
			</section> 
			</span> 
    )
  }
}

export default Bars;