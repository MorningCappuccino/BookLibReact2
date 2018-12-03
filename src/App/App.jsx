import React, { Component } from 'react';
// import { Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return  <div>Hello</div>
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