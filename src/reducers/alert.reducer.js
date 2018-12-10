import { alertConstants } from "../constants";

export function alert(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return {
                type: 'success',
                message: action.payload
            };
        case alertConstants.FAILURE:
            return {
                type: 'danger',
                message: action.payload
            };
        case alertConstants.CLEAR:
            return {};

        default:
            return state;
    }
}