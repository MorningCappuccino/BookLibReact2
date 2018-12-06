import React, { Component } from "react";
import { connect } from "react-redux";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";
import serialize from "form-serialize";

import { bookActions } from "../../actions";
import { axios } from "../../helpers";

class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            editedBook: {}
        };

        this.showModal = this.showModal.bind(this);
        this.changeEditedBook = this.changeEditedBook.bind(this);
        this.editBook = this.editBook.bind(this);
    }

    componentDidMount() {
        this.props.dispatch(bookActions.getAll());
    }

    showModal(e, book) {
        this.setState({ modal: !this.state.modal });
        this.setState({ editedBook: Object.assign({}, book) });
    }

    editBook() {
        const form = document.querySelector("#book-edit-modal");
        const bookID = this.state.editedBook._id;

        axios.patch("/book/" + bookID, serialize(form)).then(
            res => {
                const updatedBooks = [];

                this.props.books.items.forEach(book => {
                    if (book._id === res.data.editedBook._id) {
                        updatedBooks.push(res.data.editedBook);
                    } else {
                        updatedBooks.push(book);
                    }
                });

                this.props.dispatch(bookActions.setAll(updatedBooks));
                this.setState({ modal: !this.state.modal });
            },
            err => {
                console.log(err);
            }
        );
    }

    changeEditedBook(e) {
        const { value, name } = e.target;
        let editedBook = { ...this.state.editedBook, [name]: value };
        this.setState({ editedBook });
    }

    render() {
        const books = this.props.books.items;

        if (!books) {
            return false;
        }

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
                                <button
                                    className="btn btn-danger"
                                    onClick={() => this.showModal(book)}
                                >
                                    delete
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.showModal}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.showModal}>Modal title</ModalHeader>
                    <ModalBody>
                        <Form id="book-edit-modal">
                            <FormGroup>
                                <Label>Title</Label>
                                <Input
                                    name="title"
                                    value={this.state.editedBook.title}
                                    onChange={this.changeEditedBook}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Author</Label>
                                <Input
                                    name="author"
                                    value={this.state.editedBook.author}
                                    onChange={this.changeEditedBook}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Year</Label>
                                <Input
                                    name="year"
                                    value={this.state.editedBook.year}
                                    onChange={this.changeEditedBook}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Page count</Label>
                                <Input
                                    name="page_count"
                                    value={this.state.editedBook.page_count}
                                    onChange={this.changeEditedBook}
                                />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.editBook}>
                            Submit
                        </Button>
                        <Button color="secondary" onClick={this.showModal}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
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
