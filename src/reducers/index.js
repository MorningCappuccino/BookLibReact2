import { combineReducers } from 'redux';

import { books } from './books.reducer';

const rootReducer = combineReducers({
    books
});

export default rootReducer;