import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import HomeReducer from '../reducers';
import Home from './Home';

test('Home container should show Hello World', () => {
  const store = createStore(HomeReducer)

  const { getByText } = render(
    <Provider store={store}>
      <Home />
    </Provider>
  );

  expect(getByText(/Hello World/i)).toBeInTheDocument();
});
