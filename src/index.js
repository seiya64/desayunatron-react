import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import HomeReducer from './reducers';
import Root from './components/Root';

import * as serviceWorker from './serviceWorker';

const store = createStore(HomeReducer)

render(<Root store={store} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
