// import axios from "axios";
//
//
// export  function getCategories() {
//     return async dispatch => {
//         try {
//
//             const userId = localStorage.getItem('UserId')
//             const responseCategories = await axios.get(`https://reactjs-48241.firebaseio.com/Users/${userId}/Categories.json`);
//
//             const data = responseCategories.data
//
//             const categoriesList = Object.keys(data).map((value, index) => {
//                 return {
//                     name: data[value].name,
//                     id: value
//                 }
//             })
//
//             dispatch({type: GET_CATEGORIES, categoriesList})
//
//         } catch (error) {
//             console.log(error.message)
//         }
//     }
// }