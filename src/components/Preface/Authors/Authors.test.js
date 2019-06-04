import React from 'react';
import { render } from 'react-testing-library';

import Authors from './Authors';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<Authors />, div);
});
