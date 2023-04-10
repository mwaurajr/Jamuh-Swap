import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('https://localhost:3000/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="BookList">
      {books.map(book => (
        <BookCard
          key={book.id}
          title={book.title}
          author={book.author}
          coverImg={book.coverImg}
          description={book.description}
        />
      ))}
    </div>
  );
}

export default BookList;
