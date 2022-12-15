import { render, screen } from '@testing-library/react';
import App from "../App";

test('renders all menu items title', () => {
  render(<App />);
  const linkElement = screen.getByText("All Menu Items");
  expect(linkElement).toBeInTheDocument();
});
