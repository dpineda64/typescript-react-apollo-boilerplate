import { ApolloClient } from 'apollo-client';
import { HttpLink, createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, concat } from 'apollo-link';
import 'isomorphic-fetch';

const link = createHttpLink({
  uri: 'http://127.0.0.1:1233/graphql',
  credentials: 'include',
});


const middleWare = new ApolloLink((operation, forward) => {
  operation.setContext({
    loading: true,
    date: new Date(),
  });
  return forward(operation).map((data) => {
    operation.setContext({ loading: false });
    return data;
  });
});

export const cache = new InMemoryCache();

const client = new ApolloClient({
  link: concat(middleWare, link),
  cache: cache,
});

export default client;
