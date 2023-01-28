import React from 'react';
import './CSSmodules/books.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBooks } from '../redux/books/books';

const Book = (props) => {
  const { title, author, id } = props;
  const dispatch = useDispatch();
  return (
    <div className="bookContainer">
      <ul>
        <li className="texts">
          {title}
          {' '}
          by
          {author}
        </li>
        <li />
      </ul>
      <button className="rmv" type="submit" onClick={() => dispatch(removeBooks(id))}>Remove</button>
    </div>
  );
};

Book.propTypes = ({
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  category: PropTypes.string,
}).isRequired;

export default Book;
