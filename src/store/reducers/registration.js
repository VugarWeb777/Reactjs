import {REG_SUCCESS} from "../actions/actionTypes";

const initialState = {
    userInfo: null
}

export default function registrationReducer(state = initialState, action) {
    switch (action.type) {
        case REG_SUCCESS :
            return {
                userInfo: action.user
            }
        default:
            return state
    }
}