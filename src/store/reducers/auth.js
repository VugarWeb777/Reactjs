import {AUTH_SUCCESS} from "../actions/actionTypes";

const initialState = {
    userToken: null
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case AUTH_SUCCESS :
            return {
               userToken: action.token
            }
        default:
            return state
    }
}