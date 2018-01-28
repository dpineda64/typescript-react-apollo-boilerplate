import * as React from 'react';
import { Route, Router, Link } from 'react-router-dom';
import { compose, withProps } from 'recompose';
import { graphql } from 'react-apollo';
import Table from 'molecules/table';
import { loadingState, errorState } from 'organisms/data-hoc';

class Home extends React.Component<any, any> {
  static fragments = {
    endpoint: Endpoints.fragment,
  };
  constructor(props:any) {
    super(props);
    this.state = {
      openModal: false,
    };
  }

  openModal = (e: any) => {
    if (e) {
      e.preventDefault();
    }
    this.setState({ openModal: !this.state.openModal });
  }

  render() {
    return (
      <div className="page page--home">
        <div className="content">
          hello
        </div>
      </div>
    );
  }
}

export default compose(
  withProps((props:any) => {
    return {
      viewer: props.viewer,
    };
  }),
  loadingState(),
  errorState(),
)(Home);
