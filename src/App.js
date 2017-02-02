import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <StackGrid
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
          columnWidth={150}>
        <div className="searchField">
          <input placeholder="Enter Movie"></input>
          <button>Search</button>
        </div>
        <div key="key1">Item 1</div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
        </StackGrid>
      </div>
    );
  }
}

export default App;
