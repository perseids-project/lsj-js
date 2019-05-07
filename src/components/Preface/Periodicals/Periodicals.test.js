import React from 'react';
import { render } from 'react-testing-library';

import Periodicals from './Periodicals';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<Periodicals />, div);
});
