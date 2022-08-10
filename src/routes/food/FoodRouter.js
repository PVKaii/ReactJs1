import FoodActionPage from "../../pages/FoodActionPage";
import FoodPage from "../../pages/FoodPage"
import { ROLE_ADMIN } from "../../contants/RoleContants";
const foodRoutes=[
    {
        path : "/food",
        exact : true,
        page : FoodPage,
        authenticate:false,
        role:[],
    },
    {
        path : "/food/edit/:id",
        exact : false,
        page : FoodActionPage,
        authenticate:true,
        role:[ROLE_ADMIN]
        
    },
    {
        path : "/food/add",
        exact : false,
        page : FoodActionPage,
        authenticate:true,
        role:[ROLE_ADMIN]
    }
]

export default foodRoutes;