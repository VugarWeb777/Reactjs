import axios from "axios";
import {IS_FINISHED} from "./actionTypes";


export function isFinishedHandler (newData){
    return async dispatch =>{

        const userId = localStorage.getItem('UserId');

        console.log(newData)

        await axios.patch(`https://reactjs-48241.firebaseio.com/Users/${userId}/Tasks/${newData.id}.json`, newData).then(response => {


            dispatch({type:IS_FINISHED,newData})

        }).catch(e => {
            console.log(e.message)
        })

    }
}