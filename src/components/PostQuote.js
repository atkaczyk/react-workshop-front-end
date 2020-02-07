import React, { Component } from "react";
import "./main.css";

class PostQuote extends Component {
  state = { inputQuote: "" };

  postQuote = event => {
    event.preventDefault();
    const inputQuote = this.state.inputQuote;
    if (inputQuote !== "") {
      // fetch("https://example.com/profile", {
      //   method: "POST", // or 'PUT'
      //   headers: {
      //     "Content-Type": "application/json"
      //   },
      //   body: JSON.stringify(inputQuote)
      // })
      //   .then(response => response.json())
      //   .then(data => {
      this.props.updatePostedQuotes(inputQuote);
      //     console.log("Success:", data);
      this.setState({ inputQuote: "" });
      //   })
      //   .catch(error => {
      //     console.error("Error:", error);
      //   });
    }
  };

  onInputChange = event => {
    let inputQuote = event.target.value;
    this.setState({ inputQuote });
  };

  render() {
    return (
      <div>
        <button onClick={this.postQuote} className="button">
          POST QUOTE
        </button>
        <div>
          <input
            type="text"
            className="input"
            onChange={this.onInputChange}
            value={this.state.inputQuote}
          />
          {this.props.postedQuotes.length > 0 && (
            <h3>Your submitted quotes:</h3>
          )}
          {this.props.postedQuotes.map((quote, index) => (
            <p>{quote}</p>
          ))}
        </div>
      </div>
    );
  }
}

export default PostQuote;
