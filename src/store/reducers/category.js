import {ADD_CATEGORY, DELETE_CATEGORY} from "../actions/actionTypes";

const initialState = {
    categoriesList : []
}

export default function categoryReducer (state = initialState, action){
    switch (action.type){
        case ADD_CATEGORY: return {
           ...state, categoriesList: [...state.categoriesList , action.categories]
        }

        case DELETE_CATEGORY: return {
            ...state, categoriesList: [
                ...state.categoriesList.slice().filter((value, index) => value.id !== action.id)
            ]
        }
        default : return  state
    }
}