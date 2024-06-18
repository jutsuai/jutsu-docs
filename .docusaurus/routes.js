import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '412'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', 'cc8'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '4b6'),
            routes: [
              {
                path: '/get-started',
                component: ComponentCreator('/get-started', '986'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/intro',
                component: ComponentCreator('/intro', '9b6'),
                exact: true
              },
              {
                path: '/introduction',
                component: ComponentCreator('/introduction', '636'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/links',
                component: ComponentCreator('/links', '129'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/platform-manual/overview',
                component: ComponentCreator('/platform-manual/overview', 'a24'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/terminology',
                component: ComponentCreator('/terminology', 'ebd'),
                exact: true,
                sidebar: "docsSidebar"
              },
              {
                path: '/tokenomics/overview',
                component: ComponentCreator('/tokenomics/overview', '629'),
                exact: true,
                sidebar: "docsSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
