import React, { Component } from 'react';
import Bar from './Bar';
class Bars extends Component {
  constructor(props){
    super(props)
  }

  static defaultProps = {
    bars: []
  }
  
  render() {
    return (
      <div className="right_barlist">
        <section className="hero is-fullheight is-primary is-bold">
          <div className="barlist">     
            <div className="column">
              {this.props.bars.map((bar, index) => (
                <Bar key={index} {...bar}/> )
              )} 
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Bars;
