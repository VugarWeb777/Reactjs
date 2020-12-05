import {combineReducers} from 'redux'
import authReducer from "./auth";
import registrationReducer from "./registration";
import accountReducer from "./account";
import categoryReducer from "./category";
import taskReducer from "./task";


export default combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    account: accountReducer,
    category: categoryReducer,
    task: taskReducer
})

