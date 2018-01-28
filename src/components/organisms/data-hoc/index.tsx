import * as React from 'react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { branch, renderComponent, compose, mapProps } from 'recompose';

import StateMessages from 'molecules/states-messages';
import { withRouter } from 'react-router';

export const loadingState = (propName = 'data') => branch(
  (props: any) => props[propName] && props[propName].loading,
  renderComponent(StateMessages.loading),
);

export const errorState = (propName = 'data') => branch(
  (props: any) => props[propName] && props[propName].error,
  renderComponent(StateMessages.error),
);

export const withData = (component: any, query: any, options: any) => {
  return compose(
    withRouter,
    mapProps(({ data, ...rest }) => {
      return {
        ...data,
        ...rest,
      };
    }),
    graphql(query, options),
    loadingState(),
    errorState(),
  )(component);
};
