import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div>
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Take a quote, leave a quote</p>
      </div>
      <div className="App">
        <Counter></Counter>
      </div>
    </div>
  );
}

export default App;
