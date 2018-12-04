import React, { Component } from 'react';
import { connect } from 'react-redux';

class AddBook extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="jumbotron">Add books</div>
        )
    }
}

function mapStateToProps(state) {
    const { books } = state;
    return {
        books
    };
}

const cc = connect(mapStateToProps)(AddBook);
export { cc as AddBook };