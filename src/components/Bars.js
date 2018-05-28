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
      <table className="table">
      <section className="hero is-fullheight is-primary is-bold">
      <div className="barlist">
     
        {this.props.bars.map((bar, index) => (
          <tr>
           <td><Bar key={index} {...bar}/></td>
          </tr>
        ))}
      </div>
    </section>
    </table>
    )
  }  
}

export default Bars;