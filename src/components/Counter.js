import React, { Component } from "react";

class Counter extends Component {
  state = { value: "..." };

  getQuote = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        this.setState({ value: result.title });
      });
  };

  putQuote = () => {};

  render() {
    return (
      <div>
        {this.state.value}
        <button onClick={this.getQuote}>GET</button>
        {/* <button onClick={this.putQuote}>PUT</button> */}
      </div>
    );
  }
}

export default Counter;
