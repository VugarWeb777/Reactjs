import {GET_ACCOUNT_INFO} from "../actions/actionTypes";

const initialState = {
    accountInfo: null,
    categoriesList: [],
    tasks: []
}

export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case GET_ACCOUNT_INFO :
            return {
                ...state,
                accountInfo: action.accountInfo,
                categoriesList: action.categoriesList,
                tasks: action.tasks
            }
        default:
            return state
    }
}