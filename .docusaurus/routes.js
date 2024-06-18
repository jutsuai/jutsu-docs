import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/jutsu-docs/markdown-page',
    component: ComponentCreator('/jutsu-docs/markdown-page', '49e'),
    exact: true
  },
  {
    path: '/jutsu-docs/docs',
    component: ComponentCreator('/jutsu-docs/docs', 'bd7'),
    routes: [
      {
        path: '/jutsu-docs/docs',
        component: ComponentCreator('/jutsu-docs/docs', '0ae'),
        routes: [
          {
            path: '/jutsu-docs/docs',
            component: ComponentCreator('/jutsu-docs/docs', '7f6'),
            routes: [
              {
                path: '/jutsu-docs/docs/category/tutorial---basics',
                component: ComponentCreator('/jutsu-docs/docs/category/tutorial---basics', '71d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jutsu-docs/docs/category/tutorial---extras',
                component: ComponentCreator('/jutsu-docs/docs/category/tutorial---extras', 'e20'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jutsu-docs/docs/intro',
                component: ComponentCreator('/jutsu-docs/docs/intro', 'c66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jutsu-docs/docs/introduction',
                component: ComponentCreator('/jutsu-docs/docs/introduction', '542'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jutsu-docs/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/jutsu-docs/docs/tutorial-basics/congratulations', 'd7c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jutsu-docs/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/jutsu-docs/docs/tutorial-basics/create-a-blog-post', 'e5e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jutsu-docs/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/jutsu-docs/docs/tutorial-basics/create-a-document', '376'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jutsu-docs/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/jutsu-docs/docs/tutorial-basics/create-a-page', '5d8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jutsu-docs/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/jutsu-docs/docs/tutorial-basics/deploy-your-site', '1b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jutsu-docs/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/jutsu-docs/docs/tutorial-basics/markdown-features', 'c7b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jutsu-docs/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/jutsu-docs/docs/tutorial-extras/manage-docs-versions', 'c92'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/jutsu-docs/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/jutsu-docs/docs/tutorial-extras/translate-your-site', '5ee'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/jutsu-docs/',
    component: ComponentCreator('/jutsu-docs/', '2d9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
