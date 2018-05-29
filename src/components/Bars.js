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
