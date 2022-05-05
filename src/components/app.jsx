import React, { Component } from 'react';

import Bookshelf from './bookshelf.jsx';
import AddBook from './addBook.jsx';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>now<strong> wherewasi </strong>again?</h1>
        <AddBook />
        <Bookshelf />
      </div>
    )
  };
};

export default App;