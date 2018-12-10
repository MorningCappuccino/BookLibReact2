import { bookConstants } from "../constants";

export function books(state = {}, action) {
    switch (action.type) {
        case bookConstants.GETALL_REQUEST:
            return {
                loading: true
            };
        case bookConstants.GETALL_SUCCESS:
            return {
                items: action.payload
            };
        case bookConstants.ADD_REQUEST:
            return {
                ...state,
                loading: true
            };
        case bookConstants.ADD_SUCCESS:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case bookConstants.ADD_FAILURE:
            return {};
        default:
            return state;
    }
}
