import axios from "axios";
import {GET_ACCOUNT_INFO} from "./actionTypes";
import {URL_GET_ACCOUNT_INFO} from "./helpers";

export function getAccountInfo() {
    return async dispatch => {

        const data = {
            idToken: localStorage.getItem('Token')
        }

        return await axios.post(URL_GET_ACCOUNT_INFO, data).then((response) => {

            const data = response.data.users[0]

            dispatch(success(data))
        }).catch((error) => {
            console.log(error.message)
        })
    }
}


export function success(data) {
    return {
        type: GET_ACCOUNT_INFO,
        data
    }
}