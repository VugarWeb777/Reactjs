import {ADD_CATEGORY, DELETE_CATEGORY, GET_CATEGORIES} from "../actions/actionTypes";

const initialState = {
    categoriesList : []
}

export default function categoryReducer (state = initialState, action){
    switch (action.type){

        case GET_CATEGORIES: return  {
            ...state, categoriesList: action.categoriesList
        }

        case ADD_CATEGORY: return {
           ...state, categoriesList: [...state.categoriesList , action.data]
        }

        case DELETE_CATEGORY: return {
            ...state, categoriesList: [
                ...state.categoriesList.slice().filter((value, index) => value.id !== action.id)
            ]
        }
        default : return  state
    }
}