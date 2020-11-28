import {ADD_CATEGORY, GET_CATEGORIES} from "../actions/actionTypes";

const initialState = {
    categoriesList : []
}

export default function categoryReducer (state = initialState, action){
    switch (action.type){
        case ADD_CATEGORY: return {
           ...state, categoriesList: [...state.categoriesList , action.data]
        }
        case GET_CATEGORIES: return  {
            ...state, categoriesList: action.data
        }
        default : return  state
    }
}