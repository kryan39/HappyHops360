import React, { Component } from 'react';
import Bar from './Bar';
import Popup from 'reactjs-popup';
import Modal from 'react-responsive-modal';
class Bars extends Component {
  constructor(props){
    super(props)
  }

  static defaultProps = {
    bars: []
  }
  
  render() {
    return (
      <section className="hero is-fullheight is-primary is-bold">
        <div className="barlist">     
          <div className="column">
            {this.props.bars.map((bar, index) => (
             <Bar key={index} {...bar}/> )
            )} 
          </div>
        </div>
      </section>
    )
  }
}

export default Bars;
