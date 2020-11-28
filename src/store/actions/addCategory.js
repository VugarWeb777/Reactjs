import axios from "axios";
import {ADD_CATEGORY} from "./actionTypes";


export function addCategory(category) {
    return async dispatch => {

        let data = {
            name: category,
            isActive: false,
            count: 0
        }

        const userId = localStorage.getItem('UserId')

        try {

            await axios.post(`https://reactjs-48241.firebaseio.com/Users/${userId}/Categories.json`, data);

            dispatch(fetchAddCategorySuccess())

        } catch (error) {
            console.log(error.message)
        }

    }
}


export function fetchAddCategorySuccess() {
    return {
        type: ADD_CATEGORY,
        loading: true,
    }
}