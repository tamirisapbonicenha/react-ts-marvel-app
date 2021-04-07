import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import App from './App';

test('renders App component', () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  );
  const headerElement = screen.getByText(
    /Conheça mais sobre os personagens da Marvel/i
  );
  expect(headerElement).toBeInTheDocument();
});
