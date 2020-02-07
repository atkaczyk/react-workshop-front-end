import React, { Component } from "react";
import "./counter.css";

class Counter extends Component {
  state = { recievedQuotes: [], postedQuotes: [], inputQuote: "", author: "" };

  getQuote = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/1`)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        console.log(this.state.recievedQuotes);
        this.setState(prevState => ({
          recievedQuotes: [result, ...prevState.recievedQuotes]
        }));
      });
  };

  postQuote = event => {
    event.preventDefault();
    const inputQuote = {
      inputQuote: this.state.inputQuote,
      author: this.state.author
    };

    fetch("https://example.com/profile", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(inputQuote)
    })
      .then(response => response.json())
      .then(data => {
        console.log("Success:", data);
        this.setState({ inputQuote: "" });
      })
      .catch(error => {
        console.error("Error:", error);
      });
  };

  updateInputQuote = event => {
    let inputQuote = event.target.value;
    this.setState({ inputQuote });
    console.log(this.state.inputQuote);
  };

  render() {
    return (
      <div className="row">
        <div className="column">
          <button onClick={this.getQuote} className="button">
            GET
          </button>
          {this.state.recievedQuotes.map((quote, index) => (
            <p>{quote.title}</p>
          ))}
        </div>
        <div className="column">
          <button onClick={this.postQuote} className="button">
            POST
          </button>
          <div>
            <label>submit a quote:</label>
            <input
              type="text"
              className="input"
              label="submit a quote:"
              onChange={this.updateInputQuote}
            />
            {this.state.postedQuotes.map((quote, index) => (
              <p>{quote.title}</p>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
