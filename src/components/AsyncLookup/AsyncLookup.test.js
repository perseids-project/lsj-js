import React from 'react';
import { render } from 'react-testing-library';
import AsyncLookup from './AsyncLookup';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<AsyncLookup />, div);
});
