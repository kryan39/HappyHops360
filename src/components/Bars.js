import React, { Component } from 'react';
import Bar from './Bar';
import PropTypes from 'prop-types';
import Popup from 'reactjs-popup';
import Modal from 'react-responsive-modal';
class Bars extends Component {
  constructor(props){
    super(props)
    this.state = {
      open:false
    }
  }

  static defaultProps = {
    bars: []
  }


  onOpenModal = () => {
    this.setState({modalLoading: "is-loading",
    open: true
  })
}

  onCloseModal = () => {
    this.setState({open: false});
  }
  
  render() {

    {var barArray = this.props.bars.map((bar, index) => (
     <tr>
       <td>
       <button id="barbuttons" onClick={()=> this.onOpenModal()}><Bar key={index} {...bar}/></button>
      </td>
      </tr>
    ))}

    var counter = 0;


    return (
      <section className="hero is-fullheight is-primary is-bold">
      <div className="barlist">

      <Modal id="modal" open={this.state.open} onClose={this.onCloseModal} classNames={{modal: 'custom-modal' }}>
	        <div style={{float: "left"}}>
	           <h2 style={{textAlign: "center"}}>Name:</h2>
	        </div>
	        <br/>
		      <div style={{float: "left"}}>
		        <h2 style={{textAlign: "center"}}>Hours:</h2>
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
      
      <div className="columns">
       
       <div className="column">
        {this.props.bars.map((bar, index) => (
           //<Bar key={index} {...bar}/>))}
        <button id="barbuttons" onClick={()=> this.onOpenModal()}><Bar key={index} {...bar}/></button> ))}
        
        </div>
  
     </div>


      {/* <div class="columns">
        <div class="column is-one-third">
          <p>{barArray[counter++]}</p>
          <p>{barArray[counter++]}</p>
          <p>{barArray[counter++]}</p>
          <p>{barArray[counter++]}</p>
        </div>
        <div class="column is-one-third">
          <p>{barArray[counter++]}</p>
          <p>{barArray[counter++]}</p>
          <p>{barArray[counter++]}</p>
          <p>{barArray[counter++]}</p>
        </div>
        <div class="column is-one-third">
          <p>{barArray[counter++]}</p>
          <p>{barArray[counter++]}</p>
          <p>{barArray[counter++]}</p>
          <p>{barArray[counter++]}</p>
        </div>
      </div>
 */}

    </div>
    </section>
    )
  }
}

export default Bars;
