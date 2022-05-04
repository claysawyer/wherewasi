import React, { Component } from 'react';

class Bookshelf extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shelf">
        <h1 id="header">wherewasi</h1>
        { /* Start adding components here... */}
      </div>
    );
  }

}

export default connect(mapStateToProps, null)(Bookshelf);