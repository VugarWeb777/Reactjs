import {ADD_CATEGORY, ADD_TASK, DELETE_CATEGORY, GET_DATA} from "../actions/actionTypes";

const initialState = {
    categoriesList: [],
    tasks: []
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA :
            return {
                ...state, categoriesList: action.categoriesList, tasks: action.tasks
            }
        case ADD_CATEGORY:
            return {
                ...state, categoriesList: [...state.categoriesList, action.data]
            }
        case DELETE_CATEGORY:
            return {
                ...state,
                categoriesList: [...state.categoriesList.slice().filter((value, index) => value.id !== action.id)],
                tasks: [...state.tasks.slice().filter((value, index) => value.categoryId !== action.id)]
            }
        case ADD_TASK:
            return {
                ...state, tasks: [...state.tasks, action.data]
            }
        default:
            return state
    }
}