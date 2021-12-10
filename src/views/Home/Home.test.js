import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom';
import Home from './Home';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import StoreProvider from '../../store/StoreProvider';

const MockAll = () => {
  return (
    <StoreProvider>
      <BrowserRouter>
        {' '}
        <Home />
      </BrowserRouter>
    </StoreProvider>
  );
};

test('test home input error code zip origin ', () => {
  render(<MockAll />);
  const inputElement = screen.getByPlaceholderText(/Enter your code zip origin/i);
  const buttonElement = screen.getByRole('button', { Label: /Generate/i, to: '' });
  fireEvent.change(inputElement, { target: { value: '0320' } });
  fireEvent.click(buttonElement);
  const divElement = screen.getByText(/codeZipOrigin needs to be 5 characters/i);
  expect(divElement).toBeInTheDocument();
});

test('test home button summit ', () => {
  render(<MockAll />);
  const dispatch = jest.fn();
  const inputElementOrigin = screen.getByPlaceholderText(/Enter your code zip origin/i);
  const inputElementDestination = screen.getByPlaceholderText(/Enter your code zip destination/i);
  const inputElementWeight = screen.getByPlaceholderText(/Enter your weight per package in kg/i);
  const buttonElement = screen.getByRole('button', { Label: /Generate/i, to: '' });
  fireEvent.change(inputElementOrigin, { target: { value: '03201' } });
  fireEvent.change(inputElementDestination, { target: { value: '03201' } });
  fireEvent.change(inputElementWeight, { target: { value: '1' } });
  fireEvent.click(buttonElement);
  expect(dispatch).toHaveBeenCalledTimes(0);
});
