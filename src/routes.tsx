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
  {
    id: 'route-services',
    routeName: 'services',
    exact: true,
    path: '/services',
    component: services,
  },
  {
    id: 'route-endpoint',
    routeName: 'endpoint',
    exact: true,
    path: '/endpoints/:endpointId',
    component: endpoint,
  },
];

