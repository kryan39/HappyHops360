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

    {var barArray = this.props.bars.map((bar, index) => (
      <tr>
        <td><Bar key={index} {...bar}/></td>
      </tr>
    ))}

    var counter = 0;

    return (
      <section className="hero is-fullheight is-primary is-bold">
      <div className="barlist">

      <div class="columns">
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


    </div>
    </section>
    )
  }
}

export default Bars;
