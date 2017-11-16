import React, { Component } from 'react';

class Bands extends Component {


  bandLis = () => (this.props.store.getState().bands.map((band,idx) => (<li key={idx}>{band}</li>)))
  render(){
    console.log(this.props);
    return (
      <div>
        <ul>
          {this.bandLis()}
        </ul>
      </div>
    );
  }
};

export default Bands;
