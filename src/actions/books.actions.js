import { axios } from "../helpers";
import { bookConstants } from "../constants";

function getAll() {
    return dispatch => {
        dispatch({ type: bookConstants.GETALL_REQUEST });

        axios
            .get("/books")
            .then(
                books => dispatch({ type: bookConstants.GETALL_SUCCESS, books }),
                // books => console.log(books.data),
                error => dispatch({ type: bookConstants.GETALL_FAILURE, error })
            );
    };
}

export const bookActions = {
    getAll
};
