import React from 'react';
import { useSelector } from 'react-redux';
import Book from './book';
import Bookform from './bookform';

const Booklist = () => {
  const books = useSelector((state) => state.books);

  return (
    <>
      <ul className="booklist">
        {books.map((book) => (
          <Book
            key={book.id}
            id={book.id}
            title={book.title}
            category={book.category}
            author={book.author}
          />
        ))}
      </ul>
      <Bookform />
    </>
  );
};

export default Booklist;
