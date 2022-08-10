import LoginPage from "../../pages/LoginPage";


const loginRouter = [{
    path : "/login",
    exact : true,
    page : LoginPage,
    authenticate:false,
    role:[]
}]


export default loginRouter