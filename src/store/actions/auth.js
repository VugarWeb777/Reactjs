import axios from "axios";
import {AUTH_SUCCESS} from "./actionTypes";
import {URL_SIGN_IN} from "./helpers";


export function auth(email, password) {
    return async dispatch => {

        const authData = {
            email, password,
            returnSecureToken: true
        }

        const response = await axios.post(URL_SIGN_IN, authData);

        WriteLocalStorage(
            response.data.idToken,
            response.data.localId,
            String(new Date(response.headers.date))
        );
        dispatch(authSuccess(response.data.idToken))
    }
}


function WriteLocalStorage(Token, UserId, expirationDateTime) {
    localStorage.setItem('Token', Token)
    localStorage.setItem('UserId', UserId)
    localStorage.setItem('expirationDateTime', expirationDateTime)
}


export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}