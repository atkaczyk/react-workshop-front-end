import React from "react";
import logo from "./logo.svg";
import "./App.css";
import QuoteController from "./components/QuoteController";

function App() {
  return (
    <div>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Take a quote, leave a quote</p>
      </div>
      <div className="App">
        <QuoteController></QuoteController>
      </div>
    </div>
  );
}

export default App;
