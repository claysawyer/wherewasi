import React, { Component } from 'react';

import styles from '../scss/app.scss';

class AddBook extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shelf">
        <h3 id="header">Add a Book</h3>
        <form>
          <fieldset>
            <label>
              <p>Name</p>
              <input name="name" />
            </label>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }

}
export default AddBook;
//export default connect(mapStateToProps, null)(Bookshelf);