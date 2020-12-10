import axios from "axios";
import {DELETE_CATEGORY} from "./actionTypes";


export function deleteCategory(id) {
    return async (dispatch, getState) => {

        const userId = localStorage.getItem('UserId')

        try {

            await axios.delete(`https://reactjs-48241.firebaseio.com/Users/${userId}/Categories/${id}.json`);

            const tasks = getState().task.tasks;

            if (tasks.length > 0 ){
                const tasksWillDelete = tasks.filter(value => {
                    return value.categoryId === id
                })

                for (let i = 0; i < tasksWillDelete.length; i++) {
                    const taskIdDelete = tasksWillDelete[i].id
                    await axios.delete(`https://reactjs-48241.firebaseio.com/Users/${userId}/Tasks/${taskIdDelete}.json`)
                }
            }

            dispatch({type: DELETE_CATEGORY, id})

        } catch (error) {
            console.log(error.message)
        }
    }
}


