import React from 'react';
import { render } from '@testing-library/react';
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
