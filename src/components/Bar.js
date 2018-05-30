import React from 'react';

const bar = (props) => (
	
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

)

export default bar;
	

