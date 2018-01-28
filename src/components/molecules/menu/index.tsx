import * as React from 'react';
import { NavLink } from 'react-router-dom';

interface menuProps {
  items: item[];
  display?: displayMode;
}

interface item {
  id: string;
  title: string;
  path: string;
  icon?: string;
}

export enum displayMode {
  portrait,
  landscape,
}

const menu: React.SFC<menuProps> = (props) => {
  const cl = (props.display === displayMode.portrait) ? 'mn-portrait' : 'mn-landscape';
  return (
    <ul className={`mn ${cl}`}>
      {props.items.map(item => (
        <ITEM key={item.id} {...item} />
      ))}
    </ul>
  );
};

const ITEM: React.SFC<item> = props => (
  <li className="mn__item">
    <NavLink to={props.path} activeClassName="active" >
      {(props.icon) ? <i className={props.icon} /> : null}
      <span>{props.title}</span>
    </NavLink>
  </li>
);

export default menu;
