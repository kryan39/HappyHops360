import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import Modal from 'react-responsive-modal';

class Bar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false
		}
	}

	onOpenModal = () => {
    this.setState({modalLoading: "is-loading",
    open: true
    });
  }

  onCloseModal = () => {
    this.setState({open: false});
  }

	render() {
		return (
			<div id='barBox' className='box'>
				<Modal id="modal" open={this.state.open} onClose={this.onCloseModal} classNames={{modal: 'custom-modal' }}>
					<div style={{float: "left"}}>
						<h2 style={{textAlign: "center"}}>Name: {this.props.name}</h2>
					</div>
					<br/>
					<div style={{float: "left"}}>
						<h2 style={{textAlign: "center"}}>Price Level: {this.props.price_level}</h2>
					</div>
					<br/>
					<div style={{float: "left"}}>
						<h2 style={{textAlign: "center"}}>Website:</h2>
					</div>
					<br/>
					<div style={{float: "left"}}>
						<h2 style={{textAlign: "center"}}>Location:</h2>
					</div>
					<br/>
					<div style={{float: "left"}}>
						<h2 style={{textAlign: "center"}}>Reviews:</h2>
					</div>
					<br/>
        </Modal>
				<button id="barbuttons" onClick={()=> this.onOpenModal()}>
					<article className='media'>
						<div className='media-content'>
							<div className='content'>
								<p>
									<strong>{ this.props.name }</strong>
								</p>
								<p>
									{this.props.formatted_address}
								</p>
								{this.props.rating} stars
							</div>
						</div>
					</article>
			 	</button>
			</div>
		)
	}
}

export default Bar;
	
