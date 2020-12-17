import axios from "axios";
import {ADD_TASK} from "./actionTypes";


export function addTask(data){
    return async dispatch => {

        const userId = localStorage.getItem('UserId')



            axios.post(`https://reactjs-48241.firebaseio.com/Users/${userId}/Tasks.json`, data).then(response => {

                data.id = response.data.name

                dispatch({type: ADD_TASK, data})

            }).catch(e =>{
                console.log(e.message)
            });
    }
}
