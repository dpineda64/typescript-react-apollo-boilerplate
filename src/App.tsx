import * as React from 'react';
import { Route, withRouter } from 'react-router';
import routes from './routes';
import { Navigation } from 'organisms/navigation';
import { graphql, withApollo } from 'react-apollo';
import { getViewer } from 'data/users';
import { compose } from 'recompose';
import { loadingState, errorState } from 'organisms/data-hoc';


class App extends React.Component<any, {}> {
  render() {
    const { data } = this.props;
    return (
      <div className="wrapper">
        <Navigation currentUser={data.viewer} />
        {routes.map(route => (
          <Route
            key={route.id}
            exact={route.exact}
            path={route.path}
            render={() =>  <route.component {...data} />}
          />
        ))}
      </div>
    );
  }
}

const enhacedApp = compose(
  graphql(getViewer),
  loadingState(),
  errorState(),
)(withRouter(App));

export default enhacedApp;
