import { axios } from "../helpers";
import { bookConstants, alertConstants } from "../constants";

function getAll() {
    return dispatch => {
        dispatch({ type: bookConstants.GETALL_REQUEST });

        axios
            .get("/books")
            .then(
                books => dispatch({ type: bookConstants.GETALL_SUCCESS, payload: books.data }),
                error => dispatch({ type: bookConstants.GETALL_FAILURE, error })
            );
    };
}

function setAll(editedBooks) {
    return dispatch => {
        dispatch({ type: bookConstants.GETALL_SUCCESS, payload: editedBooks });
    };
}

function addBook(book) {
    return dispatch => {
        dispatch({ type: bookConstants.ADD_REQUEST });

        axios.post("/book/", book).then(
            res => {
                // it's not necessary
                dispatch({ type: bookConstants.ADD_SUCCESS, payload: res.data.book });
                dispatch({ type: alertConstants.SUCCESS, payload: 'Book added successful'});
            },
            err => {
                dispatch({ type: bookConstants.ADD_FAILURE });
                dispatch({ type: alertConstants.FAILURE, payload: err.toString() });
            }
        );
    };
}

export const bookActions = {
    getAll,
    setAll,
    addBook
};
