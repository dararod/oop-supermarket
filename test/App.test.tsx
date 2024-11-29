import { render, screen } from '@testing-library/react';

import { App } from '../src/components/App';

test('renders hello world h1', () => {
  render(<App />);
  const h1El = screen.getByText(/Hello World/i);
  expect(h1El).toBeInTheDocument();
});
