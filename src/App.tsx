import * as React from 'react';
import { Route, withRouter } from 'react-router';
import { graphql, withApollo } from 'react-apollo';
import { compose } from 'recompose';
import routes from './routes';
import { Users } from 'data/users';
import { loadingState, errorState } from 'organisms/data-hoc';


class App extends React.Component<any, {}> {
  render() {
    const { data } = this.props;
    return (
      <div className="wrapper">
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
  // graphql(Users.getViewer),
  loadingState(),
  errorState(),
)(withRouter(App));

export default enhacedApp;
