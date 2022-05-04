import React, { Component } from 'react';

//do i need to import react-dom for render to work?
//import { render } from 'react-dom'; 

class App extends Component {
  render() {
    return (
      <div>
        <Bookshelf />
      </div>
    )
  };
};

export default App;