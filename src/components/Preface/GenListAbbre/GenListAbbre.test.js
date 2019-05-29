import React from 'react';
import { render } from 'react-testing-library';

import GenListAbbre from './GenListAbbre';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<GenListAbbre />, div);
});
