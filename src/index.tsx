import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import createBrowserHistory from 'history/createBrowserHistory';
import store from './data/store';
import client from './apollo/client';
const history = createBrowserHistory();

import App from './App';

import './resources/scss/style.scss';

ReactDOM.render(
  <Router history={history}>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </Router>,
  document.getElementById('app'),
);
