import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './helpers';
import { App } from './App';

// import 'jquery';
// import 'bootstrap/js/dist/dropdown';
import 'bootstrap';
import './scss/app.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);