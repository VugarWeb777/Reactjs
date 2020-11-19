import axios from "axios";
import {AUTH_SUCCESS, AUTO_LOGOUT} from "./actionTypes";
import {URL_SIGN_IN} from "../helpers/helpers";


export function auth(email, password) {
    return async dispatch => {

        const authData = {
            email, password,
            returnSecureToken: true
        }

        const response = await axios.post(URL_SIGN_IN, authData);
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000)


        WriteLocalStorage(
            response.data.idToken,
            response.data.localId,
            expirationDate
        );
        dispatch(authSuccess(response.data.idToken))
        dispatch(autoLogout(response.data.expiresIn))
    }
}


function WriteLocalStorage(Token, UserId, expirationDateTime) {
    localStorage.setItem('Token', Token)
    localStorage.setItem('UserId', UserId)
    localStorage.setItem('expirationDateTime', expirationDateTime)
}

export function autoLogout(time){
    return dispatch => {
        setTimeout(()=> {
            dispatch(logout())
        }, time * 1000)
    }
}

export function logout(){
    localStorage.removeItem('Token')
    localStorage.removeItem('UserId')
    localStorage.removeItem('expirationDateTime')

    return {
        type: AUTO_LOGOUT
    }
}

export function autoLogin() {
    return dispatch => {
        const token = localStorage.getItem('Token')
        if (!token) {
            dispatch(logout())
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDateTime'))
            if (expirationDate <= new Date()) {
                dispatch(logout())
            } else {
                dispatch(authSuccess(token))
                dispatch(autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}

export function authSuccess(token) {
    return {
        type: AUTH_SUCCESS,
        token
    }
}