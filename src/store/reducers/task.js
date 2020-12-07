import {ADD_TASK, GET_TASKS} from "../actions/actionTypes";


const initialState = {
    tasks: []
}

export default function taskReducer (state = initialState, action ){
    switch (action.type){
        case GET_TASKS: return {
            ...state, tasks: action.tasks
        }
        case ADD_TASK: return {
            ...state, tasks: [...state.tasks, action.data]
        }
        default: return  state
    }
}