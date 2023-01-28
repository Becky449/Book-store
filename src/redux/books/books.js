const ADD_BOOK = 'BOOKSTORE/book/ADD_BOOK';
const REMOVE_BOOK = 'BOOKSTORE/book/REMOVE_BOOK';

export const addBooks = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBooks = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

// reducers

const initialState = [{
  id: '1',
  title: 'Death And The king Horseman',
  author: 'Wole Soyinka',
  category: 'Tragedy',
},
];

const booksReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);
    default:
      return state;
  }
};

export default booksReducer;
