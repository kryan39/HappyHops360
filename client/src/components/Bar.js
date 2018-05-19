import React from 'react';

const bar = (props) => (
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

export default bar;
	

