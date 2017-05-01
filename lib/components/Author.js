import React from 'react';

class Author extends React.Component {
  static nameFormatter = (author) => {
    return `${author.lastName}, ${author.firstName}`;
  }
  render() {
    const { author } = this.props;
    return (
      <div>
        <div>{Author.nameFormatter(author)}</div>
        <div>{author.website}</div>
      </div>
    );
  }
}

export default Author;