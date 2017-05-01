import React from 'react';

import data from '../fakeData';

import ArticleList from './ArticleList';

class App extends React.Component {
  render() {
    return (
      <ArticleList articles={data.articles} />
    );
  }
}

export default App;