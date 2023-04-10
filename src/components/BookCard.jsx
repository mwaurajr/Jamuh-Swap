import React from 'react';
import './BookCard.css';

const BookCard = ({ title, author, coverImg, description }) => {
  return (
    <div className="book-card">
      <img src={coverImg} alt={`${title} cover`} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{description}</p>
    </div>
  );
}

export default BookCard;
