import * as Type from "../contants/ActionTypes"

const authReducer =(state={},action)=>{
    switch(action.type){
        case Type.LOGIN:
            console.log(action.user);
            // localStorage.clear();
            localStorage.setItem("user",JSON.stringify(action.user))
            action.navigate("/")
            break;
        default:
    }
    return {}
}

export default authReducer
