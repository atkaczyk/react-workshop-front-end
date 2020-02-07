import React, { Component } from "react";
import GetQuote from "./GetQuote";
import PostQuote from "./PostQuote";
import "./main.css";

class QuoteController extends Component {
  state = { recievedQuotes: [], postedQuotes: [] };

  // We do this here so that the list component will rerender without resetting the application state
  updateRecievedQuotes = result => {
    this.setState(prevState => ({
      recievedQuotes: [result, ...prevState.recievedQuotes]
    }));
  };

  updatePostedQuotes = inputQuote => {
    this.setState(prevState => ({
      postedQuotes: [inputQuote, ...prevState.postedQuotes]
    }));
  };

  render() {
    return (
      <div className="row">
        <div className="column">
          <GetQuote
            recievedQuotes={this.state.recievedQuotes}
            updateRecievedQuotes={this.updateRecievedQuotes}
          />
        </div>
        <div className="column">
          <PostQuote
            postedQuotes={this.state.postedQuotes}
            updatePostedQuotes={this.updatePostedQuotes}
          />
        </div>
      </div>
    );
  }
}

export default QuoteController;
