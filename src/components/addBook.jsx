import React, { Component } from 'react';
import App from './app.jsx';
import styles from '../scss/app.scss';

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      type: '',
      bookmark: '',
      summary: '',
      notes: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, type, bookmark, summary, notes } = this.state;

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
      .then(this.setState({ state: this.state }))
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });

  };

  render() {
    return (
      <div className="shelf">
        <h3 id="header">Add a Book</h3>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
              <p>Name</p>
              <input name="name" onChange={this.handleInputChange} />
            </label>
            <label>
              <p>Type</p>
              <input name="type" onChange={this.handleInputChange} />
            </label>
            <label>
              <p>Bookmark</p>
              <input name="bookmark" onChange={this.handleInputChange} />
            </label>
            <label>
              <p>Summary</p>
              <input name="summary" onChange={this.handleInputChange} />
            </label>
            <label>
              <p>Notes</p>
              <input name="notes" onChange={this.handleInputChange} />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}
export default AddBook;