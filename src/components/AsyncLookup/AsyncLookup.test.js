import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render } from '@testing-library/react';

import AsyncLookup from './AsyncLookup';

it('renders without crashing', () => {
  const div = window.document.createElement('div');

  const component = (
    <MemoryRouter initialEntries={['/']}>
      <Route path="/:word?" component={AsyncLookup} />
    </MemoryRouter>
  );

  render(component, div);
});
