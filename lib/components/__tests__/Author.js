import React from 'react';
import Author from '../Author';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Author author={{
      firstName: 'Joseph',
      lastName: 'Chambers',
      website: 'test.com'
    }} />
  ).toJSON();

  expect(tree).toMatchSnapshot();
});