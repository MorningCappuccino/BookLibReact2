import React, { Component } from 'react';
import { connect } from 'react-redux';

class Books extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='jumbotron b-purple'>Books</div>
        )
    }
}

function mapStateToProps(state) {
    const { books } = state;
    return {
        books
    };
}

const c = connect(mapStateToProps)(Books);
export { c as Books };