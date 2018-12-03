import { combineReducers } from 'redux';

import { books } from './books.reducer.js';

const rootReducer = combineReducers({
    books
});

export default rootReducer;