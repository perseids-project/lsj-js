import React, { Component } from 'react';
import Lookup from './Lookup';

class App extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1 className="h3 pt-4 mb-1 font-weight-normal">
          Liddell-Scott-Jones Greek-English Lexicon
        </h1>
        <h5 className="h5 mb-3 font-weight-normal">
          Type a word with Greek or Latin characters below
        </h5>
        <Lookup />
      </div>
    );
  }
}

export default App;
