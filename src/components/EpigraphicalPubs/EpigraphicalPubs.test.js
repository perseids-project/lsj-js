import React from 'react';
import { render } from 'react-testing-library';

import EpigraphicalPubs from './EpigraphicalPubs';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<EpigraphicalPubs />, div);
});
