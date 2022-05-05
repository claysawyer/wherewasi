import React, { Component, useState, useEffect } from 'react';
import style from '../scss/app.scss';


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

  const headers = ['name ', 'type ', 'bookmark ', 'Summary ', 'Notes ']
  const bookRow = [];
  books.forEach(book => {
    bookRow.push(
      < div  >
        <p>
          {book.name}
          {book.type}
          {book.bookmark}
          {book.summary}
          {book.notes}
        </p>
      </div >
    )
  });

  return (
    <div className="bookList">
      {headers}
      <ul>
        {bookRow}
      </ul>
    </div>
  )
}
export default Bookshelf;