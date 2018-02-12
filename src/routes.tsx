import * as React from 'react';
/**
 * Pages
 */
import home from 'pages/home';

export default [
  {
    id: 'route-home',
    routeName : 'home',
    exact: true,
    path: '/',
    component: home,
  },
];

