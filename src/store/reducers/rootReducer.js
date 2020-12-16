import {combineReducers} from 'redux'
import authReducer from "./auth";
import registrationReducer from "./registration";
import accountReducer from "./account";
import dataReducer from "./data";


export default combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    account: accountReducer,
    data: dataReducer
})

