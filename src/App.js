import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StackGrid, { transitions } from "react-stack-grid";
var $ = require ('jquery')

const { scaleDown } = transitions;

class App extends Component {
  constructor(props) {
   super(props);

   this.state = {
     movie: [],
     value: ""
   };
 }

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
        <div className="searchField">
          <input placeholder="Search Movie" value={this.state.value} onChange={this._handleChange}></input>
          <button onClick={() => this._search()}>Search</button>
        </div>
        <p>Title: {this.state.movie.Title}</p>
        <img src={this.state.movie.Poster}></img>
        <p>Plot: {this.state.movie.Plot}</p>
        <StackGrid
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
          columnWidth={150}>
        <div key="key1">Item 1</div>
        <div key="key2">Item 2</div>
        <div key="key3">Item 3</div>
        </StackGrid>
      </div>
    );
  }

  _handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  _search = () => {
    console.log(this.state.value)
    return $.getJSON('https://www.omdbapi.com/?t=' + this.state.value + '&y=&plot=short&r=json')
   .then((data) => {
     console.log(data);
     this.setState({ movie: data });
   });
  }


}

export default App;
