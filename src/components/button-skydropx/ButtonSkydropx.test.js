import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import ButtonSkydropx from './ButtonSkydropx';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';

const MockAll = () => {
  return (
    <BrowserRouter>
      {' '}
      <ButtonSkydropx />
    </BrowserRouter>
  );
};

test('check label displayed', () => {
  render(<MockAll />);
  const buttonElement = screen.getByRole('button', { Label: /Button/i, to: '' });
  expect(buttonElement).toHaveTextContent(`Button`);
});
