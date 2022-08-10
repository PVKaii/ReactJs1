import * as Type from "../contants/ActionTypes"

var initialState =  {
    name:"",
    quantity : 0,
    available: true
};
const foodActionReducer = (state = initialState, action) =>{
    var {food } = action;
    switch (action.type) {
        case Type.FIND_EDIT_fOOD:
            return food;
        default:
            return {
                name:"",
                quantity : 0,
                available: true
            };
    }
}
export default foodActionReducer