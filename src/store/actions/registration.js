import axios from "axios";
import {REG_SUCCESS} from "./actionTypes";
import {URL_SIGN_UP} from "../helpers/helpers";


export function registration(email, password, name,birthday, phone) {
    return async dispatch => {


        const userData = {
            email: email,
            password: password,
            name: name,
            birthday: birthday,
            phone: phone,
        }

        await axios.post(URL_SIGN_UP, {email, password, returnSecureToken: true})
        await axios.post('https://reactjs-48241.firebaseio.com/Users.json', userData)

        dispatch(regSuccess())
    }
}


export function regSuccess() {
    return {
        type: REG_SUCCESS,
        isReg: true
    }
}