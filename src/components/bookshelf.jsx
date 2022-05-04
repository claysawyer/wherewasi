import React, { Component } from 'react';

class Bookshelf extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="shelf">
        <h1 id="header">Your Bookshelf</h1>
        <form>

        </form>
      </div>
    );
  }

}
export default Bookshelf;
//export default connect(mapStateToProps, null)(Bookshelf);