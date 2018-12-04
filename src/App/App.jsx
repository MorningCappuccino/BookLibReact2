import React, { Component } from 'react';
import { Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../helpers';
import { Books } from '../components/Books/Books.jsx';
import { AddBook } from '../components/AddBook/AddBook.jsx';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props);
        return (

            <Router history={history}>
                <div className="App">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Navbar</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">Books</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/add" className="nav-link">Add Book</Link>
                                </li>
                            </div>
                        </div>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Books} />
                        <Route path="/add" component={AddBook} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    const { books } = state;
    return {
        books
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
// export { App as App };