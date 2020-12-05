import axios from "axios";
import {GET_ACCOUNT_INFO} from "./actionTypes";
import {URL_GET_ACCOUNT_INFO} from "../helpers/helpers";


export function getAccountInfo(token) {
    return async dispatch => {

        try {

            const dataInfo = {idToken: token}
            const userId = localStorage.getItem('UserId')

            const response =  await axios.post(URL_GET_ACCOUNT_INFO, dataInfo)

            const accountInfo = response.data.users[0]
            const categoriesList = await getCategories(userId)
            const tasks = await getTasks(userId)

            dispatch(success(accountInfo, categoriesList, tasks))

        } catch (error) {
            console.log(error.message)
        }
    }
}


export async function  getCategories(userId){

        try {

            const responseCategories = await axios.get(`https://reactjs-48241.firebaseio.com/Users/${userId}/Categories.json`);

            const data = responseCategories.data

            return Object.keys(data).map((value, index) => {
                return {
                    name: data[value].name,
                    count: data[value].count,
                    isActive: data[value].isActive,
                    id: value
                }
            })
        } catch (error) {
            console.log(error.message)
        }

}

export async function  getTasks(userId){

        try {

            const responseTasks =  await axios.get(`https://reactjs-48241.firebaseio.com/Users/${userId}/Tasks.json`);

            const data = responseTasks.data

            return Object.keys(data).map((value, index) => {
                    return {
                        title: data[value].title,
                        description: data[value].description,
                        isFinished: data[value].isFinished,
                        categoryId: data[value].categoryId,
                        categoryName: data[value].categoryName,
                        id: value
                    }
                }
            )

        } catch (error) {
            console.log(error.message)
        }
}


export function success(accountInfo, categoriesList,tasks) {
    return {
        type: GET_ACCOUNT_INFO,
        accountInfo,
        categoriesList,
        tasks
    }
}