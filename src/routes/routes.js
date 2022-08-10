import FoodRouter from "./food/FoodRouter"
import HomeRouter from "./home/HomeRouter"
import CategoryRouter from "./category/CategoryRouter"
import loginRouter from "./login/LoginRouter";
import logoutRouter from "./logout/LogoutRouter";
import notFoundRouter from "./notfound/NotFoundRoute";

const routers =[
    FoodRouter,HomeRouter,CategoryRouter,loginRouter,logoutRouter,notFoundRouter
]

export default routers;