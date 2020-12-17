import axios from "axios";
import {DELETE_TASK} from "./actionTypes";


export function deleteTask(id){
    return async dispatch => {

        const userId = localStorage.getItem('UserId')

        try {

            const response = await axios.delete(`https://reactjs-48241.firebaseio.com/Users/${userId}/Tasks/${id}.json`);

            dispatch({type: DELETE_TASK, id})

            console.log(response.data)

        } catch (error) {
            console.log(error.message)
        }
    }
}