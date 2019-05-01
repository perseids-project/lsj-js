import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';
import Postscript from '../Postscript';
import ListOfAbbreviations from '../ListOfAbbreviations';
import GenListAbbre from '../GenListAbbre';
import PapyPub from '../PapyPub';
import Authors from '../Authors';

import 'perseids-react-components/build/css/index.css';

import AsyncLookup from '../AsyncLookup';
import Preface from '../Preface';

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
              <Route exact path="/p/genlistabbre" component={GenListAbbre} />
              <Route exact path="/p/postscript" component={Postscript} />
              <Route exact path="/p/authors" component={Authors} />
              <Route exact path="/p/papypub" component={PapyPub} />
              <Route exact path="/p/listofabbreviations" component={ListOfAbbreviations} />
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
