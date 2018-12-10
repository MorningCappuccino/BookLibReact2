import { combineReducers } from 'redux';

import { books } from './books.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
    books,
    alert
});

export default rootReducer;