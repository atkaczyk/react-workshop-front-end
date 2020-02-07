import React, { Component } from "react";
import "./main.css";

class RecievedQuotes extends Component {
  getQuote = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then(response => response.json())
      .then(result => {
        this.props.updateRecievedQuotes(result);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.getQuote} className="button">
          GET QUOTE
        </button>
        {this.props.recievedQuotes.map((quote, index) => (
          <p>{quote.title}</p>
        ))}
      </div>
    );
  }
}

export default RecievedQuotes;
