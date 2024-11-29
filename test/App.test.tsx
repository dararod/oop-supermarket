import { render, screen } from '@testing-library/react';

import { App } from '../src/components/App';

test('renders header title', () => {
  render(<App />);
  const h1El = screen.getByText(/OOP Supermarket/i);
  expect(h1El).toBeInTheDocument();
});
