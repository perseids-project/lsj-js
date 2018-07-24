import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Lookup from './Lookup';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container text-center">
          <header>
            <h1 className="h3 pt-4 mb-1 font-weight-normal">
              Liddell-Scott-Jones Greek-English Lexicon (beta)
            </h1>
            <h5 className="h5 mb-3 font-weight-normal">
              Type a word with Greek or Latin characters below
            </h5>
          </header>
          <main>
            <Router basename={process.env.PUBLIC_URL}>
              <Route path="/:word?" component={Lookup} />
            </Router>
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
