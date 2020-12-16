import axios from "axios";
import {GET_DATA} from "./actionTypes";

export function getData() {
    return async dispatch => {

        let categoriesList = []
        let tasks = []

        const userId = localStorage.getItem('UserId')
        await axios.get(`https://reactjs-48241.firebaseio.com/Users/${userId}/Categories.json`).then(responseCategories => {

            const responseData = responseCategories.data

            categoriesList = Object.keys(responseData).map((value, index) => {
                return {
                    name: responseData[value].name,
                    id: value
                }
            })

            axios.get(`https://reactjs-48241.firebaseio.com/Users/${userId}/Tasks.json`).then(responseTasks => {
                const responseTasksData = responseTasks.data

                if (responseTasksData !== null) {
                    tasks = Object.keys(responseTasksData).map((value, index) => {
                        return {
                            ...responseTasksData[value],
                            id: value
                        }
                    })

                    dispatch({type: GET_DATA, categoriesList, tasks})
                } else {
                    dispatch({type: GET_DATA, categoriesList, tasks})
                }
            })
        }).catch(error => {
            console.log(error.message)
        })
    }
}
