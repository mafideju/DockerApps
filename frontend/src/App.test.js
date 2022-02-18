import { render, screen } from '@testing-library/react';
import App from './App';

test('renders california love', () => {
  render(<App />);
  const linkElement = screen.getByText(/california love/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders react', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/react/i);
//   expect(linkElement).toBeInTheDocument();
// });
