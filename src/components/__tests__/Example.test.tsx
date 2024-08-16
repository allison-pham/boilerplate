import React from 'react';
import { render, screen } from '@testing-library/react';
import Example from './Example';

test('renders example component', () => {
  render(<Example />);
  expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});