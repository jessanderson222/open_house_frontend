import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Open House</h1>
        </header>
        <Home />
      </div>
    );
  }
}

export default App;
