import {SEARCH_TASK} from "./actionTypes";
import axios from "axios";

export function searchTask(searchQuery){
    return async dispatch => {

        const userId = localStorage.getItem('UserId')


        await axios.get(`https://reactjs-48241.firebaseio.com/Users/${userId}/Tasks.json`).then(responseTasks => {
            const responseTasksData = responseTasks.data

            if (responseTasksData !== null) {
                let tasks = Object.keys(responseTasksData).map((value) => {
                    return {
                        ...responseTasksData[value],
                        id: value
                    }
                })

                let search = tasks.filter(function(item) {
                    let searchValue = item.title.toLowerCase();

                    return searchValue.indexOf(searchQuery) !== -1;
                })



                console.log(searchQuery,search)

                dispatch({type: SEARCH_TASK, search})
            }
        })

    }
}