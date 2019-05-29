import React from 'react';
import { render } from 'react-testing-library';

import ReferenceMethods from './ReferenceMethods';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<ReferenceMethods />, div);
});
