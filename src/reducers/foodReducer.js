import * as Type from "../contants/ActionTypes"

var initialState =  [
    {   
        id :1,
        name : "food 1",
        quantity:10,
        available:true
    },
    {
        id :2,
        name : "food 2",
        quantity:10,
        available:true
    },
    {
        id :3,
        name : "food 3",
        quantity:10,
        available:false
    }
];
const foodReducer = (state = initialState, action) =>{
    var {id ,food} = action;
    switch (action.type) {
        case Type.FETCH_fOODS :
            return [...state];
        case Type.DELETE_fOOD:
            state = state.filter(food=>food.id!==id);
            return [...state];
        default:
            return state;
    }
}
export default foodReducer