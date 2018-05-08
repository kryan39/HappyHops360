import React from 'react';

const bar = (props) => (
		<div class='card'>
			<h2>{props.name}</h2>
			<div id="card-content">
				<div className='info'>
					<p>{props.address}</p>
				</div>
			</div>
		</div>
);

export default bar;
	

