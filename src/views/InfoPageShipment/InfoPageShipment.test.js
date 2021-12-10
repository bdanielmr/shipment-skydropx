import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';

import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import StoreProvider from '../../store/StoreProvider';
import InfoPageShipment from './InfoPageShipment';

const MockAll = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        {' '}
        <InfoPageShipment />
      </BrowserRouter>
    </StoreProvider>
  );
};

test('Test initial component in view', () => {
  render(<MockAll />);
  const textElementInfo = screen.getByText(/Package Information/i);
  const textElemenTable = screen.getByText(/Rate/i);
  const textElemenButton = screen.getByText(/Calculate/i);
  expect(textElementInfo).toBeInTheDocument();
  expect(textElemenTable).toBeInTheDocument();
  expect(textElemenButton).toBeInTheDocument();
});
