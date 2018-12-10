import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import serialize from "form-serialize";

import { bookActions } from "../../actions";

class AddBook extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            author: "",
            year: "",
            page_count: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.dispatch( bookActions.getAll() );
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit() {
        const form = document.querySelector("#book-add");

        this.props.dispatch(bookActions.addBook(serialize(form)));
    }

    render() {
        return (
            <div className="jumbotron">
                <Form id="book-add">
                    <FormGroup>
                        <Label>Title</Label>
                        {/*todo: make custom validation or put button in form section*/}
                        <Input name="title" value={this.state.title} onChange={this.handleChange} required />
                    </FormGroup>
                    <FormGroup>
                        <Label>Author</Label>
                        <Input
                            name="author"
                            value={this.state.author}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Year</Label>
                        <Input type="number" name="year" value={this.state.year} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Page count</Label>
                        <Input
                            type="number"
                            name="page_count"
                            value={this.state.page_count}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                </Form>
                <Button color="success" onClick={this.handleSubmit}>
                    Submit
                </Button>
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

const cc = connect(mapStateToProps)(AddBook);
export { cc as AddBook };
