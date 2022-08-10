import CategoryPage from "../../pages/CategoryPage"
import { ROLE_ADMIN } from "../../contants/RoleContants";


const categoryRoutes=[
    {
        path : "/category",
        exact : true,
        page : CategoryPage,
        authenticate:true,
        role:[ROLE_ADMIN]
    }
]

export default categoryRoutes;