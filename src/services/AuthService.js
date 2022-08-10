import { actLogin } from "../actions/AuthTodo"
import { callAPi } from "./CallAPI"

export const loginApi=(dispatch,user,navigate,login)=>{
    return callAPi("POST",JSON.stringify(user),"login")
    .then(res=>res.text())
    .then(result=>dispatch(actLogin(JSON.parse(result),navigate)))
    // .then(()=>{login()})
}