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
    return state;
}
export default foodReducer