import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const articles = [
    { id: 1, author: {} },
    { id: 2, author: {} },
    { id: 3, author: {} },
  ];

  const tree = renderer.create(
    <ArticleList articles={articles} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
  expect(tree.children.length).toBe(3);
});