import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "../src/container/NavBar/nav"
import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
