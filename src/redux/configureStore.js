import { configureStore } from '@reduxjs/toolkit';
import checkStatusReducer from './categories/categories';
import booksReducer from './books/books';

const store = configureStore({
  reducer: {
    books: booksReducer,
    category: checkStatusReducer,
  },
});

export default store;
