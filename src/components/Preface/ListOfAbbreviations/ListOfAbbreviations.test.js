import React from 'react';
import { render } from 'react-testing-library';

import ListOfAbbreviations from './ListOfAbbreviations';

it('renders without crashing', () => {
  const div = window.document.createElement('div');
  render(<ListOfAbbreviations />, div);
});
