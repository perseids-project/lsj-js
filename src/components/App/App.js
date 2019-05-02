import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';

import 'perseids-react-components/build/css/index.css';

import AsyncLookup from '../AsyncLookup';
import Preface from '../Preface';
import ReferenceMethods from '../ReferenceMethods';
import EpigraphicalPubs from '../EpigraphicalPubs';

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
            <Switch>
              <Route exact path="/l/:word?" component={AsyncLookup} />
              <Route exact path="/p/preface" component={Preface} />
              <Route exact path="/p/methods" component={ReferenceMethods} />
	      <Route exact path="/p/Epigraphical" component={EpigraphicalPubs} />
              <Route exact path="/:word?" component={AsyncLookup} />
            </Switch>
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
