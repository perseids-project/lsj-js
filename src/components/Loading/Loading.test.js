import React from 'react';
import ReactDOM from 'react-dom';
import {render} from 'react-testing-library';
import Loading from './Loading';

it('renders without crashing', () => {

  const text = 'hello';
  const div = window.document.createElement('div');
  render(
    <Loading
      text={text}
    />,
    div,
  );
  
});