import axios from "axios";
import {GET_ACCOUNT_INFO} from "./actionTypes";
import {URL_GET_ACCOUNT_INFO} from "../helpers/helpers";


export function getAccountInfo(token) {
    return async dispatch => {

        try {

            const dataInfo = {idToken: token}

            const response =  await axios.post(URL_GET_ACCOUNT_INFO, dataInfo)

            const accountInfo = response.data.users[0]


            dispatch(success(accountInfo))

        } catch (error) {
            console.log(error.message)
        }
    }
}



export function success(accountInfo) {
    return {
        type: GET_ACCOUNT_INFO,
        accountInfo
    }
}