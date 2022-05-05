import React, { Component, useState, useEffect } from 'react';
import style from '../scss/app.scss';

function deleteBook(props) {

}

function Bookshelf(props) {
  const [books, SetBooks] = useState([{}]);

  useEffect(() => {
    fetch('http://localhost:3000/api/getBooks')
      .then(response => response.json()).then((data) => {
        //console.log('books', books)
        //console.log('data', data)
        SetBooks([...data])
        //console.log('after', books)
      })
      .catch(err => console.log(err))
  }, [])

  const bookRow = [];
  books.forEach(book => {
    bookRow.push(
      <tbody>
        <tr>
          <td>{book.name}</td>
          <td>{book.type}</td>
          <td>{book.bookmark}</td>
          <td>{book.summary}</td>
          <td>{book.notes}</td>
          <td><button label='edit' onClick={() => { props.addMarketClick(document.querySelector('#input').value); }}>Edit</button></td>
          <td><button label='delete' onClick={() => { props.addMarketClick(document.querySelector('#input').value); }}>Remove</button></td>
        </tr>
      </tbody>
    )
  });

  return (
    <div className="bookList">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Bookmark</th>
            <th>Summary</th>
            <th>Notes</th>
          </tr>
        </thead>
        {bookRow}
      </table>
    </div>
  )
}

export default Bookshelf;