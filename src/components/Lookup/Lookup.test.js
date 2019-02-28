import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-testing-library';
import Lookup from './Lookup';


it('renders without crashing', () => {

  const dictionary = {
    dictionary: {},
    exact: {},
    greek: {},
    latin: {},
  };

  const history = { push() { } };
  const match = { params: { word: 'hello' } };

  const div = window.document.createElement('div');
  render(
    <Lookup
      dictionary={dictionary}
      history={history}
      match={match}
    />,
    div,
  );

});
