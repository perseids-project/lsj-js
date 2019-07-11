import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import App from './App';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<App />, div);
});

it('renders title', () => {
  const { getByText } = render(<App />);

  expect(getByText('Liddell-Scott-Jones Greek-English Lexicon')).toBeInTheDocument();
});

it('looks up a word', () => {
  const { getByText, getByPlaceholderText } = render(<App />);
  const lookupNode = getByPlaceholderText('Enter word...');

  expect(window.location.pathname).toEqual('/');

  fireEvent.change(lookupNode, { target: { value: 'plinthos' } });

  expect(window.location.pathname).toEqual('/plinthos');
  expect(getByText('πλίνθος, ἡ, brick')).toBeInTheDocument();
});
