import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { PerseidsHeader, PerseidsFooter } from 'perseids-react-components';

import 'perseids-react-components/build/css/index.css';

import I18n from '../I18n';
import AsyncLookup from '../AsyncLookup';

const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <>
      <PerseidsHeader>
        <I18n t="header.title" />
      </PerseidsHeader>
      <div className="container text-center">
        <header>
          <h1 className="h3 pt-4 mb-1 font-weight-normal">
            <I18n t="header.fulltitle" />
          </h1>
        </header>
        <main>
          <div className="mb-4">
            <Route path="/:word?" component={AsyncLookup} />
          </div>
        </main>
      </div>
      <PerseidsFooter
        github="https://github.com/perseids-project/lsj-js"
        report="https://github.com/perseids-project/lsj-js/issues"
      />
    </>
  </Router>
);

export default App;
