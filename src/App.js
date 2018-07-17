import React, { Component } from 'react';
import './App.css';
import Lookup from './Lookup';

class App extends Component {
  render() {
    return (
      <div className="App pr-5 pl-5">
        <header className="pt-5 pb-2">
          <h1>Liddell-Scott-Jones Greek-English Lexicon</h1>
        </header>
        <h4 className="pb-2">
          Look up a word
        </h4>
        <Lookup />
      </div>
    );
  }
}

export default App;
