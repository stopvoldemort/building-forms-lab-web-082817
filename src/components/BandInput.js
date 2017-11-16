import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    text: ""
  }

  handleChange = (ev) => {
    const newText = ev.target.value
    this.setState({text: newText})
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.store.dispatch({type: "ADD_BAND", band: this.state.text})
    this.setState({text: ""})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="enter band name" onChange={this.handleChange} value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
