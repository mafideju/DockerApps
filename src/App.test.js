import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Docker, GitHub Actions e React', () => {
  render(<App />);
  const linkElement = screen.getByText(/Docker, GitHub Actions e React/i);
  expect(linkElement).toBeInTheDocument();
});

// test('renders react', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/react/i);
//   expect(linkElement).toBeInTheDocument();
// });
