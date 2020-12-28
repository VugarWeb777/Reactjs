import {
    ADD_CATEGORY,
    ADD_TASK,
    DELETE_CATEGORY,
    DELETE_TASK,
    EDIT_CATEGORY,
    GET_DATA, IS_FINISHED,
    SEARCH_TASK
} from "../actions/actionTypes";

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
        case EDIT_CATEGORY:

            let categoryWillUpdate = state.categoriesList[action.index]
            categoryWillUpdate.name = action.newData.name

            return {
                ...state,
                categoriesList: [...state.categoriesList]
            }
        case ADD_TASK:
            return {
                ...state, tasks: [...state.tasks, action.data]
            }
        case DELETE_TASK:
            return {
                ...state, tasks: [...state.tasks.slice().filter((value, index) => value.id !== action.id)]
            }
        case SEARCH_TASK:
            return {
                ...state, tasks: [...action.search]
            }
        case IS_FINISHED:

            let task = state.tasks[action.newData.index]
            task.isFinished = action.newData.isFinished

            return {
            ...state, tasks: [...state.tasks]
        }
        default:
            return state
    }
}