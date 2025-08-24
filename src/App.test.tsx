import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page content', () => {
  render(<App />);
  const headingElement = screen.getByText(/hi there!/i);
  expect(headingElement).toBeTruthy();
});
