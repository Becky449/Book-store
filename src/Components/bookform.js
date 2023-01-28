/* eslint-disable-import-no-extraneous-dependencies  */

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/books';

const Bookform = () => {
  const dispatcher = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addHandler = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
    };

    dispatcher(addBooks(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <>
      <div className="booktext">ADD NEW BOOK</div>
      <form className="bookform" onSubmit={addHandler}>
        <input type="text" name="title" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="text" name="author" placeholder="author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button className="newbook" type="submit">ADD BOOK</button>
      </form>
    </>
  );
};

export default Bookform;
