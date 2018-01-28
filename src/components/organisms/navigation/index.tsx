import * as React from 'react';
import Menu from 'molecules/menu';
import items from './_menu-items';

export class Navigation extends React.Component<any, any> {
  render() {
    const { currentUser } = this.props;
    return (
      <nav className="top">
        <div className="content">
          <div className="brand">
            <h3> Boilerplate </h3>
          </div>
          <div className="menu__container">
            <Menu items={items} />
          </div>
          <div className="user__menu">
            {currentUser.username}
          </div>
        </div>
      </nav>
    );
  }
}
