import Logout from "../../containers/Logout/logout"

const logoutRouter = [{
    path : "/logout",
    exact : true,
    page : Logout,
    authenticate:true,
    role:[]
}]


export default logoutRouter