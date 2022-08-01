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

export const actFindFood = id=>{
    return {
        type : Type.FIND_fOOD,
        id : id
    }
}


export const actEditFood = food=>{
    return{
        type : Type.EDIT_fOOD,
        food :food
    }
}

export const actAddFood = food=>{
    return{
        type : Type.ADD_fOOD,
        food :food
    }
}