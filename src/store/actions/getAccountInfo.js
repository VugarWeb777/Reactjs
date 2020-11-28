import axios from "axios";
import {GET_ACCOUNT_INFO} from "./actionTypes";
import {URL_GET_ACCOUNT_INFO} from "../helpers/helpers";

export function getAccountInfo(token) {
    return async dispatch => {

        try {
            let dataInfo = {
                idToken: token
            }

            const response =  await axios.post(URL_GET_ACCOUNT_INFO, dataInfo)
            const data = response.data.users[0]

            dispatch(success(data))
        } catch (error) {
            console.log(error.message)
        }
    }
}


export function success(data) {
    return {
        type: GET_ACCOUNT_INFO,
        data
    }
}