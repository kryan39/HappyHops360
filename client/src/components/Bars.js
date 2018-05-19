import React, { Component } from 'react';
import Bar from './Bar'
class Bars extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="barlist">
        {this.props.bars.map((bar, index) => (
            <Bar key={index} {...bar}/>
        ))}
      </div>
    )
  }  
}

export default Bars;