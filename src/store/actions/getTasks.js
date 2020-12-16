// import axios from "axios";
// import {GET_TASKS} from "./actionTypes";
//
// export  function getTasks(){
//     return async dispatch=> {
//         try {
//             const userId = localStorage.getItem('UserId')
//             const responseTasks =  await axios.get(`https://reactjs-48241.firebaseio.com/Users/${userId}/Categories.json`);
//
//             const data = responseTasks.data
//
//             console.log(data)
//
//             const tasks =  Object.keys(data).map((value, index) => {
//                     return {
//                         title: data[value].title,
//                         description: data[value].description,
//                         isFinished: data[value].isFinished,
//                         categoryId: data[value].categoryId,
//                         categoryName: data[value].categoryName,
//                         id: value
//                     }
//                 }
//             )
//
//             dispatch({type: GET_TASKS, tasks})
//
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
// }