import React from 'react';
import { render } from '@testing-library/react';
import AsyncLookup from './AsyncLookup';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<AsyncLookup />, div);
});
