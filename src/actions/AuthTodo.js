import * as Type from "../contants/ActionTypes"
import { loginApi } from "../services/AuthService"

export const actLoginRequest= (user,navigate,login)=>{
    return dispatch =>{
        return loginApi(dispatch,user,navigate,login)
    }
}

export const actLogin= (user,navigate)=>{
    return{
        type : Type.LOGIN,
        user,
        navigate
    }
}