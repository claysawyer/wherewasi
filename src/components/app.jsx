import React, { Component } from 'react';
import Bookshelf from './bookshelf.jsx';
import AddBook from './addBook.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleAddRecord = this.handleAddRecord.bind(this);
  }

  handleAddRecord = (name, type, bookmark, summary, notes) => {
    const book = {
      type,
      name,
      bookmark,
      summary,
      notes
    };

    fetch('http://localhost:3000/api/addBook', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...book }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        this.setState({ newRecord: data })
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };

  render() {
    return (
      <div className="wrapper">
        <span>now <span className='neonText'>wherewasi</span> again?</span>
        <AddBook addRecord={this.handleAddRecord} />
        <Bookshelf newRecord={this.state.newRecord} />
      </div>
    )
  };
};

export default App;