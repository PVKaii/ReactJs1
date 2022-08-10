import { actAddFood, actDeleteFood, actEditFood, actFetchFoods, actGetEditFood } from "../actions/FoodTodos";
import { callAPi } from "./CallAPI";

export const getAllFoodApi = (dispatch)=>{
    return callAPi("GET",null,"food")
    .then(res=> res.text())
    .then(result=>dispatch(actFetchFoods(JSON.parse(result))))
    .catch(error =>{
        console.log(error);
        
    });
}

export const getEditFoodApi = (dispatch,id)=>{
    console.log(typeof id)
    return callAPi("GET",null,`food/${id}`)
    .then(res=> res.text())
    .then(result=>dispatch(actGetEditFood(JSON.parse(result))));
}


export const addFoodApi = (dispatch,food)=>{
    return callAPi("POST",JSON.stringify(food),"food/add")
    .then(res=> res.text())
    .then(result=>dispatch(actAddFood(JSON.parse(result))));
}
export const editFoodApi = (dispatch,food)=>{
    return callAPi("PUT",JSON.stringify(food),`food/edit/${food.id}`)
    .then(res=> res.text())
    .then(result=>dispatch(actEditFood(JSON.parse(result))));
}

export const deleteFoodApi = (dispatch,id)=>{
    return callAPi("DELETE",null,`food/delete/${id}`)
    .then(res=> res.text())
    .then(result=>dispatch(actDeleteFood(JSON.parse(result))));
}