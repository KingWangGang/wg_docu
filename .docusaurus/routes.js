import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '66d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '3d1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '2d4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '8ac'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '8c6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b8c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '307'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '79b'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '531'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '5ca'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'ab7'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'c4c'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'd0d'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '360'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'b28'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '33f'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '003'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'ed9'),
    exact: true
  },
  {
    path: '/helloMarkdown',
    component: ComponentCreator('/helloMarkdown', 'e16'),
    exact: true
  },
  {
    path: '/helloReact',
    component: ComponentCreator('/helloReact', '071'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '60c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'dd5'),
    routes: [
      {
        path: '/docs/greeting',
        component: ComponentCreator('/docs/greeting', '59a'),
        exact: true
      },
      {
        path: '/docs/guide/hello',
        component: ComponentCreator('/docs/guide/hello', '2f9'),
        exact: true
      },
      {
        path: '/docs/guide/son_folder/son_guide',
        component: ComponentCreator('/docs/guide/son_folder/son_guide', '6fb'),
        exact: true
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'e84'),
        exact: true
      },
      {
        path: '/docs/JAKA',
        component: ComponentCreator('/docs/JAKA', 'fef'),
        exact: true,
        sidebar: "docs"
      },
      {
        path: '/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/docs/tutorial-basics/congratulations', '7ef'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post', '2c8'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/docs/tutorial-basics/create-a-document', 'f0d'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/docs/tutorial-basics/create-a-page', 'ca5'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/docs/tutorial-basics/deploy-your-site', '508'),
        exact: true
      },
      {
        path: '/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/docs/tutorial-basics/markdown-features', 'f90'),
        exact: true
      },
      {
        path: '/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions', 'd64'),
        exact: true
      },
      {
        path: '/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/docs/tutorial-extras/translate-your-site', '16a'),
        exact: true
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '1bf'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
