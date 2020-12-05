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
// Category -table
// Task - table
// Relat - Category.id = Task.CategoryID

/*
var query = SELECT NAME FROM CATEGORY JOIN TASK ON CATEGORY  Category.id = Task.CategoryID

React ---
task fro react
SPORT
----


 */
