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
      value: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, type, summary, bookmark, notes } = this.state;
    this.props.addRecord(name, type, summary, bookmark, notes)
    document.getElementById("bookForm").reset();
  }

  render() {
    return (
      <div className="shelf">
        <form id="bookForm" onSubmit={this.handleSubmit}>
          <fieldset>
            <label>
              Name:
              <input name="name" onChange={this.handleInputChange} />
            </label>
            <label>
              Type:
              <select name="type" value={this.state.type} onChange={this.handleInputChange}>
                <option name="type" value="Novel">Novel</option>
                <option value="Series">Series</option>
                <option value="Webseries">Webseries</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label>
              Bookmark:
              <input name="bookmark" onChange={this.handleInputChange} />
            </label>
            <label>
              Summary:
              <input name="summary" onChange={this.handleInputChange} />
            </label>
            <label>
              Notes:
              <input name="notes" onChange={this.handleInputChange} />
            </label>
            <button type="submit">Create Record</button>
          </fieldset>
        </form>
      </div>
    );
  }

}
export default AddBook;

