import {ADD_TASK} from "../actions/actionTypes";


const initialState = {
    tasks: []
}


export default function taskReducer (state = initialState, action ){
    switch (action.type){
        case ADD_TASK: return {
            ...state, tasks: [...state.tasks, action.tasks]
        }
        default: return  state
    }
}