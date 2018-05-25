import React from 'react';

const bar = (props) => (
	<section className='section'>
		<div className='container'>
			<div id='barBox' className='box'>
				<article className='media'>
					<div className='media-content'>
						<div className='content'>
							<p>
								<strong>{ props.name }</strong><br/>
								{props.formatted_address}<br/>
							</p>
								{props.rating} stars
						</div>
					</div>
				</article>
			</div>
		</div>
	</section> 
)

export default bar;
	

