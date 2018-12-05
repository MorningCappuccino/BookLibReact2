import React, { Component } from "react";
import { connect } from "react-redux";

import { bookActions } from "../../actions";

class Books extends Component {
    constructor(props) {
        super(props);

        this.showModal = this.showModal.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(bookActions.getAll());
    }

    showModal(e, book) {}

    render() {
        const books = this.props.books.data;

        if (!books) {
            return false;
        }

        console.log(books);

        return (
            <div>
                <div className="jumbotron b-purple">
                    <div className="book-list">
                        {books.map(book => (
                            <div key={book._id} className="book-item mb-3">
                                <div>{book.title}</div>
                                <div>{book.author}</div>
                                <div>{book.year}</div>
                                <div>{book.page_count}</div>
                                <button
                                    className="btn btn-warning mr-3"
                                    onClick={e => this.showModal(e, book)}
                                >
                                    edit
                                </button>
                                <button className="btn btn-danger">delete</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
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
