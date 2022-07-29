import * as Type from "../contants/ActionTypes"

export const actFetchFoods = ()=>{
    return {
        type : Type.FETCH_fOODS
    }
}
export const actDeleteFood = (id)=>{
    return {
        type : Type.DELETE_fOOD,
        id : id
    }
}