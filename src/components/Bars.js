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
      <section className="hero is-fullheight is-primary is-bold">
      <div className="barlist">
        {this.props.bars.map((bar, index) => (
            <Bar key={index} {...bar}/>
        ))}
      </div>
    </section>
    )
  }  
}

export default Bars;