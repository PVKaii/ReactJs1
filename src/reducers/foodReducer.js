import * as Type from "../contants/ActionTypes"

var initialState =  [

];
const foodReducer = (state = initialState, action) =>{
    var {id ,food} = action;
    switch (action.type) {
        case Type.FETCH_fOODS :
            state=action.foods;
            console.log(state)
            return state;
        case Type.DELETE_fOOD:
            console.log(id)
            state = state.filter(food=>food.id!==id);
            return [...state];
        // case Type.FIND_fOOD:
        //     return state[0];
        case Type.EDIT_fOOD:
            var index = state.findIndex(foodElement =>foodElement.id===food.id);
            state[index] = food;
            return [...state]
        case Type.ADD_fOOD:
            state.push(food);
            return [...state]
        default:
            return state;
    }
}
export default foodReducer