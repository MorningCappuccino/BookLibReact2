import { axios } from "../helpers";
import { bookConstants } from "../constants";

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

export const bookActions = {
    getAll,
    setAll
};
