import {combineReducers} from 'redux'
import authReducer from "./auth";
import registrationReducer from "./registration";
import accountReducer from "./account";

export default combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    account: accountReducer
})

