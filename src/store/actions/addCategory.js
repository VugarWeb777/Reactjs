import axios from "axios";
import {ADD_CATEGORY} from "./actionTypes";


export function addCategory(category) {
    return async dispatch => {

        let data = {
            name: category,
            count: 0,
            isActive: false
        }

        const userId = localStorage.getItem('UserId')

        try {

            const response = await axios.post(`https://reactjs-48241.firebaseio.com/Users/${userId}/Categories.json`, data);
            data.id = response.data.name

            dispatch(fetchAddCategorySuccess(data))

        } catch (error) {
            console.log(error.message)
        }
    }
}


export function fetchAddCategorySuccess(data) {
    return {
        type: ADD_CATEGORY,
        data
    }
}