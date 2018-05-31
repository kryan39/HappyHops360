import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import Modal from 'react-responsive-modal';
import '../App.css'

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
			<div className="column">
				<Modal	
					id="modal" 
					open={this.state.open} 
					onClose={this.onCloseModal} 
					classNames={{ overlay: 'custom-overlay', modal: 'custom-modal' }}
				>
					<div style={{float: "left"}}>
						<h1 style={{textAlign: "center"}}><strong>{this.props.name}</strong></h1>
					</div>
					<br/>
					<div style={{float: "left"}}>
						<h2 style={{textAlign: "center"}}>Price Level: {this.props.price_level}</h2>
					</div>
					<br/>
					<div style={{float: "left"}}>
						<h2 style={{textAlign: "center"}}>Rating: {this.props.rating}</h2>
					</div>
					<br/>
        </Modal>
				<button id="barbuttons" onClick={()=> this.onOpenModal()}>
				<div id="barBox" className='box'>
					<article className='media'>
						<div className='media-content'>
							<div className='content'>
								<h1>
									{ this.props.name }
								</h1>
								<h4>
									{this.props.formatted_address}
								</h4>
							</div>
						</div>
					</article>
					</div>
			 	</button>
			</div>
		)
	}
}

export default Bar;
	
