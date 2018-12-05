import { bookConstants } from "../constants";

export function books(state = {}, action) {
    switch (action.type) {
        case bookConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case bookConstants.GETALL_SUCCESS:
            return action.books;
        default:
            return state;
    }
}
