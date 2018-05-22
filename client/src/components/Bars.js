import React, { Component } from 'react';
import Bar from './Bar'
class Bars extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  static defaultProps = {
    bars: []
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