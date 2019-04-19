import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BootstrapBaseCss } from "styled-base-components";
import { ThemeProvider } from "styled-components";
import { IndieTheme } from "../stories/color";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BootstrapBaseCss />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
