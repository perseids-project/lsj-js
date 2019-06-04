import React from 'react';
import { render } from 'react-testing-library';

import PapyPub from './PapyPub';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<PapyPub />, div);
});
