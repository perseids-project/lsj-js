import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';

import 'perseids-react-components/build/css/index.css';

import AsyncLookup from './AsyncLookup';

const App = () => (
  <React.Fragment>
    <PerseidsHeader>
      LSJ Lexicon
    </PerseidsHeader>
    <div className="container text-center">
      <header>
        <h1 className="h3 pt-4 mb-1 font-weight-normal">
          Liddell-Scott-Jones Greek-English Lexicon
        </h1>
      </header>
      <main>
        <div className="mb-4">
          <Router basename={process.env.PUBLIC_URL}>
            <Route path="/:word?" component={AsyncLookup} />
          </Router>
        </div>
      </main>
    </div>
    <PerseidsFooter
      github="https://github.com/perseids-project/lsj-js"
      report="https://github.com/perseids-project/lsj-js/issues"
    />
  </React.Fragment>
);

export default App;
