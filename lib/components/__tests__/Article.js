import React from 'react';
import Article from '../Article';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const article = {
    title: 'Test article',
    date: 'Test date',
    body: 'Test body',
    author: {
      firstName: 'Joseph',
      lastName: 'Chambers',
      website: 'test.com'
    }
  };
  const tree = renderer.create(
    <Article article={article} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});