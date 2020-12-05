import axios from "axios";
import {DELETE_CATEGORY} from "./actionTypes";


export function deleteCategory(id, index) {
    return async dispatch => {

        const userId = localStorage.getItem('UserId')

        try {

            await axios.delete(`https://reactjs-48241.firebaseio.com/Users/${userId}/Categories/${id}.json`);

            dispatch({type: DELETE_CATEGORY, id})

        } catch (error) {
            console.log(error.message)
        }
    }
}


