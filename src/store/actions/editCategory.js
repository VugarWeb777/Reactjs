import axios from "axios";
import {EDIT_CATEGORY} from "./actionTypes";


export function editCategory (id,index,newData){
    return async dispatch =>{

        const userId = localStorage.getItem('UserId');

        console.log(id, newData)

        await axios.patch(`https://reactjs-48241.firebaseio.com/Users/${userId}/Categories/${id}.json`, newData).then(response => {


            dispatch({type:EDIT_CATEGORY,id,index,newData})

        }).catch(e => {
            console.log(e.message)
        })

    }
}