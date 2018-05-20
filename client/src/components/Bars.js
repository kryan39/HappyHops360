import React, { Component } from 'react';
import Bar from './Bar'
class Bars extends Component {

  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount() {
    axios.get('https://api.foursquare.com/v2/venues/search', {
      params: {
        client_id: 'XUWUSU4DRQKL53KJPEPBVVNIOA10LTQZ5JMOLUUCBDAT5FAG',
        client_secret: '3OHYJFEBBLNNIH5DDYAGG3BHMX1N3GLI4P5YBR1QPSK1TQMY',
        near: 'Chicago, IL',
        categoryId: '4bf58dd8d48988d116941735'
      }
    }).then(res => {
      const bars = res.data;
      console.log(bars);
    })
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