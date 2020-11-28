import {ADD_CATEGORY, GET_CATEGORIES} from "../actions/actionTypes";

const initialState = {
    categoriesList : [],
    loading: false
}

export default function categoryReducer (state = initialState, action){
    switch (action.type){
        case ADD_CATEGORY: return {
           ...state
        }
        case GET_CATEGORIES: return  {
            categoriesList: action.data, loading: action.loading
        }
        default : return  state
    }
}