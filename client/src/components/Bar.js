import React from 'react';

const bar = (props) => (
	<section className='section'>
		<div className='container'>
				<div className="is-divider" />
					<div id='barBox' className='box'>
						<article className='media'>
							<div className='media-left'>
								<figure className="image is-64x64">
									<img src="https://bulma.io/images/placeholders/128x128.png" alt=""/>
								</figure>
							</div>
							<div className='media-content'>
								<div className='content'>
									<p>
										<strong>{ props.name }</strong><br/>
										{props.formatted_address}<br/>
									</p>
										{props.rating}
								</div>
							</div>
						</article>
				</div>
		</div>
	</section> 
)

export default bar;
	

