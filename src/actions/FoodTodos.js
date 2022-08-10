import * as Type from "../contants/ActionTypes"
import { addFoodApi, deleteFoodApi, editFoodApi, getAllFoodApi, getEditFoodApi } from "../services/FoodService"

export const actFetchFoods = (foods)=>{
    return {
        type : Type.FETCH_fOODS,
        foods:foods
    }
}

export const actFetchFoodsRequest = ()=>{
    return dispatch =>{
        return getAllFoodApi(dispatch)
    }
}

export const actDeleteFood = (food)=>{
    console.log(food.id);
    return {
        type : Type.DELETE_fOOD,
        id : food.id
    }
}

export const actDeleteFoodRequest = id=>{
    return dispatch =>{
       return deleteFoodApi(dispatch,id)
    }
}
export const actGetEditFood = food=>{
    console.log(food)
    return {
        type : Type.FIND_EDIT_fOOD,
        food : food
    }
}

export const actGetEditFoodRequest= id=>{
    return (dispatch) => {
            return getEditFoodApi(dispatch,id);
        }
    
}

export const actEditFood = food=>{
    return{
        type : Type.EDIT_fOOD,
        food :food
    }
}

export const actEditFoodRequest = food=>{
    return dispatch =>{
       return editFoodApi(dispatch,food)
    }
}

export const actAddFood = food=>{
    return{
        type : Type.ADD_fOOD,
        food :food
    }
}

export const actAddFoodRequest = food=>{
    return dispatch =>{
       return addFoodApi(dispatch,food)
    }
}