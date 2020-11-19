import {GET_ACCOUNT_INFO} from "../actions/actionTypes";

const initialState = {
    accountInfo: null
}

export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ACCOUNT_INFO :
            return {
                ...state, accountInfo: action.data
            }
        default:
            return state
    }
}