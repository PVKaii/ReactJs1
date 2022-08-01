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
const foodActionReducer = (state = initialState, action) =>{
    var {id } = action;
    switch (action.type) {
        case Type.FIND_fOOD:
            state = initialState;
            const food=state.find(element =>{ 
               return element.id ===parseInt(id)} );
            console.log(food)
            console.log(id)
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