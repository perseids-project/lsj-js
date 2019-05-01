import React from 'react';
import { render } from 'react-testing-library';

import Postscript from './Postscript';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<Postscript />, div);
});
