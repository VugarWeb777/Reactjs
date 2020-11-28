import axios from "axios";
import {GET_CATEGORIES} from "./actionTypes";


export  function  getCategories(){
    return async dispatch  => {

        const userId = localStorage.getItem('UserId')

        try {

            const response = await axios.get(`https://reactjs-48241.firebaseio.com/Users/${userId}/Categories.json`);

            const categories = response.data

            const data = Object.keys(categories).map((value, index) => {
                return {
                    name: categories[value].name,
                    count: categories[value].count,
                    isActive: categories[value].isActive,
                    id: value
                }
            })

            dispatch(fetchCategoriesSuccess(data))

        } catch (error) {
            console.log(error.message)
        }
    }
}


export function fetchCategoriesSuccess(data) {
    return {
        type: GET_CATEGORIES,
        data
    }
}

