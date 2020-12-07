import axios from "axios";
import {ADD_TASK} from "./actionTypes";


export function addTask(data){
    return async dispatch => {

        const userId = localStorage.getItem('UserId')

        try {

            const response = await axios.post(`https://reactjs-48241.firebaseio.com/Users/${userId}/Tasks.json`, data);

            dispatch({type: ADD_TASK, data})

            console.log(response.data)

        } catch (error) {
            console.log(error.message)
        }

    }
}
