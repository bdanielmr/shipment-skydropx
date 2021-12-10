import { render, screen } from '@testing-library/react';
import BadgeSkydropx from './BadgeSkydropx';

test('renders text badge', () => {
  render(<BadgeSkydropx />);
  const linkElement = screen.getByText(/best choose/i);
  expect(linkElement).toBeInTheDocument();
});
