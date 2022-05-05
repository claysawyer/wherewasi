import React, { Component, useState, useEffect } from 'react';
import style from '../scss/app.scss';

function Bookshelf(props) {
  const [books, setBooks] = useState([{}]);
  const { newRecord } = props;
  //console.log("newRecord", newRecord)
  useEffect(() => {
    fetch('http://localhost:3000/api/getBooks')
      .then(response => response.json()).then((data) => {
        //console.log(data)
        setBooks([...data])
        // console.log('after', data)
      })
      .catch(err => console.log(err))
  }, [newRecord]);

  const handleDelete = (bookName) => {
    fetch(`http://localhost:3000/api/deleteBook/${bookName}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        setBooks(books.filter(book => book.name !== bookName))
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  let filteredBooks = [];
  const handleSearch = (e) => {
    const searchString = e.target.value.toLowerCase();
    filteredBooks = books.filter((book) => {
      //return book.name.includes(e.target.value);
      return setBooks(books.filter(book => book.name.toLowerCase().includes(searchString)))
    });
  }

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

          <td><button label='edit' onClick={(e) => {
            console.log({ book });
            //handleEdit(book.name);
          }}>Edit</button></td>

          <td><button label='delete' onClick={(e) => {
            console.log({ book });
            handleDelete(book.name);
          }}>Remove</button></td>

        </tr>
      </tbody>
    )
  });

  return (
    <div className="bookList">
      <input className='search-box' type='search' placeholder='search' onChange={(e) => {
        handleSearch(e);
      }} />
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